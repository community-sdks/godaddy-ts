import test from 'node:test';
import assert from 'node:assert/strict';
import { ApiClient } from '../src/apiClient.js';

test('buildQueryString repeats keys for arrays', () => {
  assert.equal(
    ApiClient.buildQueryString({ tags: ['one', 'two'], enabled: true, skip: null }),
    'tags=one&tags=two&enabled=true'
  );
});
