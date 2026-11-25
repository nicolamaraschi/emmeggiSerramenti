import { defineFunction } from '@aws-amplify/backend';

export const getReviews = defineFunction({
  name: 'get-reviews',
  entry: './handler.ts',
  timeoutSeconds: 15,
  memoryMB: 256,
  environment: {
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY ?? '',
    GOOGLE_PLACE_ID: process.env.GOOGLE_PLACE_ID ?? '',
    GOOGLE_PLACE_QUERY: 'Emme Gi di Morocutti Gabriele Via Evangelista Torricelli 2 Buccinasco',
  },
});
