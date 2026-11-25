import { defineFunction } from '@aws-amplify/backend';

export const sendQuote = defineFunction({
  name: 'send-quote',
  entry: './handler.ts',
  timeoutSeconds: 30,
  memoryMB: 256,
  environment: {
    SENDER_EMAIL: process.env.SENDER_EMAIL ?? 'nicola.maraschi01@gmail.com',
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL ?? 'info@serramentiemmegi.it',
    SES_REGION: 'us-east-1',
  },
});
