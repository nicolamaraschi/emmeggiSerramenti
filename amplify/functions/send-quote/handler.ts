import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { SESClient, SendRawEmailCommand } from '@aws-sdk/client-ses';

interface QuoteItem {
  quantity: number | string;
  typology: string;
  detail?: string;
  width?: string;
  height?: string;
}

interface QuoteAttachment {
  filename: string;
  contentType: string;
  contentBase64: string;
}

interface QuotePayload {
  product: string;
  category?: string;
  color: string;
  services?: string[];
  items: QuoteItem[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address?: string;
    city: string;
    province?: string;
    message?: string;
    privacyAccepted: boolean;
  };
  attachment?: QuoteAttachment | null;
}

const ses = new SESClient({ region: process.env.SES_REGION || 'us-east-1' });

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024; // 5 MB

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function jsonResponse(statusCode: number, body: Record<string, unknown>): APIGatewayProxyResultV2 {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  };
}

function buildHtmlEmail(payload: QuotePayload): string {
  const servicesRow =
    payload.services && payload.services.length > 0
      ? `<tr>
          <td style="padding:8px 0;color:#71717a;">Servizi richiesti</td>
          <td style="padding:8px 0;color:#111827;">${payload.services.map((s) => escapeHtml(s)).join(', ')}</td>
        </tr>`
      : '';

  const itemsRows = payload.items
    .map((item) => {
      const dims =
        item.width || item.height
          ? `${item.width ? `${escapeHtml(String(item.width))} cm` : '?'} × ${item.height ? `${escapeHtml(String(item.height))} cm` : '?'}`
          : '-';
      return `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;">${escapeHtml(String(item.quantity))}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(item.typology)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#4b5563;">${escapeHtml(item.detail || '-')}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;white-space:nowrap;">${dims}</td>
      </tr>`;
    })
    .join('');

  return `<!doctype html>
<html lang="it">
<body style="margin:0;padding:24px;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#18181b;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
    <div style="background:#0a0a0a;padding:24px 28px;border-bottom:3px solid #e65c00;">
      <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e65c00;font-weight:600;">Emmegi Serramenti</p>
      <h1 style="margin:6px 0 0;font-size:22px;color:#ffffff;font-weight:600;">Nuova richiesta di preventivo online</h1>
    </div>

    <div style="padding:28px;">
      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#71717a;">1. Configurazione Prodotto</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
        <tr>
          <td style="padding:8px 0;color:#71717a;width:160px;">Prodotto</td>
          <td style="padding:8px 0;font-weight:600;color:#111827;">${escapeHtml(payload.product)}${payload.category ? ` <span style="color:#71717a;font-weight:400;">(${escapeHtml(payload.category)})</span>` : ''}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#71717a;">Colore / Finitura</td>
          <td style="padding:8px 0;font-weight:600;color:#111827;">${escapeHtml(payload.color)}</td>
        </tr>
        ${servicesRow}
      </table>

      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#71717a;">2. Quantità e Tipologie</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;border:1px solid #e5e7eb;">
        <thead>
          <tr style="background:#f9fafb;text-align:left;">
            <th style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;color:#6b7280;">Qtà</th>
            <th style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;color:#6b7280;">Tipologia</th>
            <th style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;color:#6b7280;">Dettaglio / Ante</th>
            <th style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;color:#6b7280;">Misure (L × H)</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
      </table>

      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#71717a;">3. Dati Cliente</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px;">
        <tr>
          <td style="padding:6px 0;color:#71717a;width:160px;">Nome e Cognome</td>
          <td style="padding:6px 0;font-weight:600;color:#111827;">${escapeHtml(payload.customer.fullName)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717a;">Email</td>
          <td style="padding:6px 0;"><a href="mailto:${escapeHtml(payload.customer.email)}" style="color:#e65c00;">${escapeHtml(payload.customer.email)}</a></td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717a;">Telefono</td>
          <td style="padding:6px 0;"><a href="tel:${escapeHtml(payload.customer.phone)}" style="color:#111827;font-weight:600;">${escapeHtml(payload.customer.phone)}</a></td>
        </tr>
        ${
          payload.customer.address
            ? `<tr>
          <td style="padding:6px 0;color:#71717a;">Indirizzo</td>
          <td style="padding:6px 0;color:#111827;">${escapeHtml(payload.customer.address)}</td>
        </tr>`
            : ''
        }
        <tr>
          <td style="padding:6px 0;color:#71717a;">Località</td>
          <td style="padding:6px 0;color:#111827;">${escapeHtml(payload.customer.city)}${payload.customer.province ? ` (${escapeHtml(payload.customer.province)})` : ''}</td>
        </tr>
      </table>

      ${
        payload.customer.message
          ? `<div style="background:#f9fafb;border-left:3px solid #e65c00;padding:14px 16px;border-radius:6px;margin-top:12px;">
              <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;color:#71717a;font-weight:600;">Messaggio</p>
              <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;color:#111827;">${escapeHtml(payload.customer.message)}</p>
            </div>`
          : ''
      }
    </div>
  </div>
</body>
</html>`;
}

function buildRawMimeEmail(params: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  htmlBody: string;
  attachment?: QuoteAttachment | null;
}): string {
  const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const encodedSubject = `=?UTF-8?B?${Buffer.from(params.subject, 'utf-8').toString('base64')}?=`;

  const lines: string[] = [
    `From: ${params.from}`,
    `To: ${params.to}`,
    `Reply-To: ${params.replyTo}`,
    `Subject: ${encodedSubject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    Buffer.from(params.htmlBody, 'utf-8').toString('base64'),
  ];

  if (params.attachment?.contentBase64 && params.attachment.filename) {
    const safeFilename = sanitizeHeader(params.attachment.filename).replace(/"/g, '');
    const safeContentType = sanitizeHeader(params.attachment.contentType || 'application/octet-stream');
    lines.push(
      '',
      `--${boundary}`,
      `Content-Type: ${safeContentType}; name="${safeFilename}"`,
      `Content-Disposition: attachment; filename="${safeFilename}"`,
      'Content-Transfer-Encoding: base64',
      '',
      params.attachment.contentBase64
    );
  }

  lines.push('', `--${boundary}--`, '');
  return lines.join('\r\n');
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 204 };
  }

  if (event.requestContext?.http?.method && event.requestContext.http.method !== 'POST') {
    return jsonResponse(405, { error: 'Metodo non consentito.' });
  }

  let payload: QuotePayload;
  try {
    const rawBody = event.isBase64Encoded && event.body
      ? Buffer.from(event.body, 'base64').toString('utf-8')
      : event.body || '{}';
    payload = JSON.parse(rawBody) as QuotePayload;
  } catch {
    return jsonResponse(400, { error: 'Formato richiesta non valido.' });
  }

  // Basic validation
  if (!payload.product || !payload.color) {
    return jsonResponse(400, { error: 'Seleziona prodotto e colore.' });
  }
  if (!Array.isArray(payload.items) || payload.items.length === 0) {
    return jsonResponse(400, { error: 'Inserisci almeno una riga di quantità e tipologia.' });
  }
  if (
    !payload.customer?.fullName?.trim() ||
    !payload.customer?.email?.trim() ||
    !payload.customer?.phone?.trim() ||
    !payload.customer?.city?.trim()
  ) {
    return jsonResponse(400, { error: 'Compila tutti i campi obbligatori (nome, email, telefono, città).' });
  }
  if (!payload.customer.privacyAccepted) {
    return jsonResponse(400, { error: 'È necessario accettare il trattamento dei dati personali.' });
  }

  if (payload.attachment?.contentBase64) {
    const estimatedBytes = Math.ceil((payload.attachment.contentBase64.length * 3) / 4);
    if (estimatedBytes > MAX_ATTACHMENT_BYTES) {
      return jsonResponse(400, { error: 'Il file allegato supera la dimensione massima di 5 MB.' });
    }
  }

  const senderEmail = process.env.SENDER_EMAIL || 'nicola.maraschi01@gmail.com';
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'emmegiserramenti@gmail.com';

  const subject = sanitizeHeader(
    `Preventivo Online: ${payload.product} - ${payload.customer.fullName}`
  );
  const htmlBody = buildHtmlEmail(payload);

  const rawMessage = buildRawMimeEmail({
    from: `Emmegi Serramenti Preventivi <${senderEmail}>`,
    to: recipientEmail,
    replyTo: sanitizeHeader(payload.customer.email),
    subject,
    htmlBody,
    attachment: payload.attachment,
  });

  try {
    const result = await ses.send(
      new SendRawEmailCommand({
        RawMessage: { Data: Buffer.from(rawMessage, 'utf-8') },
      })
    );

    return jsonResponse(200, {
      ok: true,
      messageId: result.MessageId,
    });
  } catch (err) {
    console.error('SES send error:', err);
    return jsonResponse(500, {
      error: 'Errore durante l’invio della richiesta. Riprova tra poco o contattaci telefonicamente.',
    });
  }
};
