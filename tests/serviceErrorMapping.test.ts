import test from 'node:test';
import assert from 'node:assert/strict';
import { Client } from '../src/client.js';
import { Config } from '../src/config.js';
import { Response } from '../src/http/response.js';
import { TestTransport } from './support/testTransport.js';
import { DomainsNotFoundException } from '../src/errors/domains/index.js';

test('service methods throw service-specific exceptions', async () => {
  const transport = new TestTransport();
  transport.push(new Response({
    statusCode: 404,
    headers: { 'content-type': 'application/json' },
    body: '{"code":"NOT_FOUND","message":"Not found"}'
  }));

  const client = new Client(new Config({
    apiKey: 'key',
    apiSecret: 'secret',
    maxRetries: 0,
    fetchImplementation: async () => { throw new Error('not used'); }
  }), transport);

  await assert.rejects(
    () => client.domains().get({ domain: 'example.com' }),
    (error) => {
      assert.equal(error instanceof DomainsNotFoundException, true);
      assert.equal(error.statusCode, 404);
      assert.equal(error.getErrorResponse()?.code, 'NOT_FOUND');
      return true;
    }
  );
});
