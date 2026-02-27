import test from 'node:test';
import assert from 'node:assert/strict';
import { ApiClient } from '../src/apiClient.js';
import { Config } from '../src/config.js';
import { NotFoundException } from '../src/errors/notFoundException.js';
import { RateLimitException } from '../src/errors/rateLimitException.js';
import { ServerException } from '../src/errors/serverException.js';
import { UnauthorizedException } from '../src/errors/unauthorizedException.js';
import { ValidationException } from '../src/errors/validationException.js';
import { Response } from '../src/http/response.js';
import { TestTransport } from './support/testTransport.js';

const cases = [
  [400, ValidationException],
  [401, UnauthorizedException],
  [404, NotFoundException],
  [429, RateLimitException],
  [500, ServerException]
];

for (const [statusCode, ExpectedError] of cases) {
  test(`maps ${statusCode} to ${ExpectedError.name}`, async () => {
    const transport = new TestTransport();
    transport.push(new Response({
      statusCode,
      headers: { 'content-type': 'application/json' },
      body: '{}'
    }));

    const client = new ApiClient(
      new Config({ maxRetries: 0, fetchImplementation: async () => { throw new Error('not used'); } }),
      transport
    );

    await assert.rejects(
      client.request({ method: 'GET', serviceBaseUrl: 'https://example.test', path: '/example' }),
      ExpectedError
    );
  });
}
