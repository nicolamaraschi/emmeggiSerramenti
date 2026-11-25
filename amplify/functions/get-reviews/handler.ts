import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

interface GoogleReviewRaw {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
}

interface NormalizedReview {
  author: string;
  date: string;
  rating: number;
  text: string;
  photoUrl?: string;
}

interface ReviewsPayload {
  source: 'google_places' | 'fallback';
  rating: number;
  totalReviews: number;
  reviews: NormalizedReview[];
  updatedAt: string;
}

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour in-memory cache
let cachedPayload: ReviewsPayload | null = null;
let cachedAt = 0;
let cachedPlaceId = process.env.GOOGLE_PLACE_ID || '';

const FALLBACK_DATA: Omit<ReviewsPayload, 'updatedAt'> = {
  source: 'fallback',
  rating: 4.9,
  totalReviews: 46,
  reviews: [
    {
      author: 'Matteo Cobelli',
      date: '4 mesi fa',
      rating: 5,
      text: 'Mi sono rivolto a loro per sostituire finestre, porte finestre, tapparelle e cassonetti delle tapparelle, e mi sono…',
    },
    {
      author: 'Chiara Battaglia',
      date: '5 mesi fa',
      rating: 5,
      text: 'Professionali, precisi e puntuali. Ottimi prodotti e servizio lodevole. Pienamente soddisfatta delle nuove porte.',
    },
    {
      author: 'Gianfranca Rossetti',
      date: '5 mesi fa',
      rating: 5,
      text: 'Ottimo servizio effettuato da Emmegi serramenti: sostituiti tutti gli infissi, i cassonetti e le relative persiane…',
    },
  ],
};

function jsonResponse(
  statusCode: number,
  body: ReviewsPayload,
  maxAgeSeconds = 3600
): APIGatewayProxyResultV2 {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, max-age=${maxAgeSeconds}`,
    },
    body: JSON.stringify(body),
  };
}

async function resolvePlaceId(apiKey: string): Promise<string> {
  if (cachedPlaceId) return cachedPlaceId;

  const query =
    process.env.GOOGLE_PLACE_QUERY ||
    'Emme Gi di Morocutti Gabriele Via Evangelista Torricelli 2 Buccinasco';

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({
      textQuery: query,
      languageCode: 'it',
    }),
  });

  if (!res.ok) {
    throw new Error(`Places searchText failed with ${res.status}`);
  }

  const data = (await res.json()) as { places?: Array<{ id?: string }> };
  const placeId = data.places?.[0]?.id;
  if (!placeId) {
    throw new Error('Place ID not found from textQuery');
  }

  cachedPlaceId = placeId;
  return placeId;
}

async function fetchGoogleReviews(apiKey: string): Promise<ReviewsPayload> {
  const placeId = await resolvePlaceId(apiKey);
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=it`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
    },
  });

  if (!res.ok) {
    throw new Error(`Places details failed with ${res.status}`);
  }

  const data = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: GoogleReviewRaw[];
  };

  const reviews: NormalizedReview[] = (data.reviews || [])
    .filter((r) => (r.text?.text || r.originalText?.text) && (r.rating ?? 0) >= 4)
    .slice(0, 3)
    .map((r) => ({
      author: r.authorAttribution?.displayName || 'Cliente Google',
      date: r.relativePublishTimeDescription || 'Recensione Google',
      rating: r.rating || 5,
      text: r.text?.text || r.originalText?.text || '',
      photoUrl: r.authorAttribution?.photoUri,
    }));

  if (reviews.length === 0) {
    throw new Error('No reviews returned from Google Places');
  }

  return {
    source: 'google_places',
    rating: data.rating ?? 4.9,
    totalReviews: data.userRatingCount ?? 46,
    reviews,
    updatedAt: new Date().toISOString(),
  };
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 204 };
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!apiKey) {
    return jsonResponse(
      200,
      {
        ...FALLBACK_DATA,
        updatedAt: new Date().toISOString(),
      },
      300
    );
  }

  const now = Date.now();
  if (cachedPayload && now - cachedAt < CACHE_TTL_MS) {
    return jsonResponse(200, cachedPayload, 3600);
  }

  try {
    const livePayload = await fetchGoogleReviews(apiKey);
    cachedPayload = livePayload;
    cachedAt = now;
    return jsonResponse(200, livePayload, 3600);
  } catch (err) {
    console.error('Google Places reviews fetch error:', err);
    return jsonResponse(
      200,
      cachedPayload ?? {
        ...FALLBACK_DATA,
        updatedAt: new Date().toISOString(),
      },
      300
    );
  }
};
