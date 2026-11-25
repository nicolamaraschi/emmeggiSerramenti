import { defineBackend } from '@aws-amplify/backend';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { FunctionUrlAuthType, HttpMethod } from 'aws-cdk-lib/aws-lambda';
import { sendQuote } from './functions/send-quote/resource';
import { getReviews } from './functions/get-reviews/resource';

const backend = defineBackend({
  sendQuote,
  getReviews,
});

// Grant SES send permissions to the quote Lambda
backend.sendQuote.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'],
  })
);

// Expose a public HTTPS Function URL with CORS for the online quote wizard
const quoteFnUrl = backend.sendQuote.resources.lambda.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [HttpMethod.POST],
    allowedHeaders: ['Content-Type'],
  },
});

// Expose a public HTTPS Function URL with CORS for live Google Reviews
const reviewsFnUrl = backend.getReviews.resources.lambda.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [HttpMethod.GET],
  },
});

// Export Function URLs into amplify_outputs.json for the frontend
backend.addOutput({
  custom: {
    quoteApiUrl: quoteFnUrl.url,
    reviewsApiUrl: reviewsFnUrl.url,
  },
});
