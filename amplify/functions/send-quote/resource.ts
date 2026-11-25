import { defineFunction } from '@aws-amplify/backend';

export const sendQuote = defineFunction({
  name: 'send-quote',
  entry: './handler.ts',
  timeoutSeconds: 30,
  memoryMB: 256,
  environment: {
    SENDER_EMAIL: process.env.SENDER_EMAIL ?? 'nicola.maraschi01@gmail.com',
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL ?? 'emmegiserramenti@gmail.com',
    SES_REGION: 'us-east-1',
  },
});
