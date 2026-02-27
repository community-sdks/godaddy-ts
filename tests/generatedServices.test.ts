import test from 'node:test';
import assert from 'node:assert/strict';
import { Client, Config } from '../src/index.js';
import { Response } from '../src/http/response.js';
import { TestTransport } from './support/testTransport.js';

const serviceAccessors = [
  'abuse',
  'aftermarket',
  'agreements',
  'ans',
  'auctions',
  'certificates',
  'countries',
  'domains',
  'orders',
  'parking',
  'shoppers',
  'subscriptions'
];

function splitTopLevel(text) {
  const parts = [];
  let current = '';
  let depth = 0;
  for (const ch of text) {
    if (ch === ',' && depth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = '';
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth += 1;
    if (ch === ')' || ch === ']' || ch === '}') depth -= 1;
    current += ch;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function methodArgs(fn) {
  const source = fn.toString();
  const start = source.indexOf('(');
  let index = start + 1;
  let depth = 0;
  while (index < source.length) {
    const ch = source[index];
    if (ch === '(' || ch === '[' || ch === '{') depth += 1;
    if (ch === ')' || ch === ']' || ch === '}') {
      if (depth === 0) break;
      depth -= 1;
    }
    index += 1;
  }
  const params = source.slice(start + 1, index).trim();
  return params ? splitTopLevel(params) : [];
}

function sampleValue(param) {
  const [rawName] = param.split('=');
  const name = rawName.trim();
  const lower = name.toLowerCase();
  if (!name) return undefined;
  if (lower.startsWith('x')) return 'header-value';
  if (lower.includes('limit') || lower.includes('offset') || lower === 'page' || lower === 'pagesize' || lower.includes('waitms') || lower.includes('lengthmax') || lower.includes('lengthmin')) return 1;
  if (lower.includes('closed') || lower === 'latest' || lower.includes('includesubs') || lower.includes('privacy') || lower.includes('fortransfer')) return true;
  if (lower.includes('body') || lower.includes('records') || lower.includes('contacts') || lower.includes('subscription') || lower.includes('shopper') || lower.includes('subaccount') || lower.includes('secret') || lower.includes('requestbody') || lower.includes('certificatecreate') || lower.includes('reissuecreate') || lower.includes('renewcreate') || lower.includes('certificaterevoke')) return { sample: true };
  if (lower.endsWith('s') || ['keys', 'domains', 'statuses', 'statusgroups', 'includes', 'sources', 'tlds', 'types', 'productgroupkeys'].includes(lower)) return ['sample'];
  return 'sample';
}

test('every service method builds a request', async () => {
  const transport = new TestTransport();
  const client = new Client(
    new Config({
      apiKey: 'key',
      apiSecret: 'secret',
      maxRetries: 0,
      fetchImplementation: async () => { throw new Error('not used'); }
    }),
    transport
  );

  for (const accessor of serviceAccessors) {
    const service = client[accessor]();
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(service)).filter((name) => name !== 'constructor');

    for (const methodName of methods) {
      const args = methodArgs(service[methodName]).map(sampleValue);
      transport.push(new Response({
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: '{}'
      }));

      const before = transport.requests.length;
      await service[methodName](...args);
      const request = transport.requests[before];

      assert.equal(request.headers.Authorization, 'sso-key key:secret');
      assert.equal(request.url.includes('{'), false, `${accessor}.${methodName}`);
    }
  }
});
