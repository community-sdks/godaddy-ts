import { AbstractService } from './abstractService.js';

export class SubscriptionsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, SubscriptionsService.BASE_URL);
  }

  async list(xAppKey, xShopperId = null, xMarketId = null, productGroupKeys = null, includes = null, offset = null, limit = null, sort = null) {
    return this.call('GET', '/v1/subscriptions', { queryParams: { productGroupKeys, includes, offset, limit, sort }, headers: { 'X-App-Key': xAppKey, 'X-Shopper-Id': xShopperId, 'X-Market-Id': xMarketId } });
  }

  async productGroups(xAppKey, xShopperId = null) {
    return this.call('GET', '/v1/subscriptions/productGroups', { headers: { 'X-App-Key': xAppKey, 'X-Shopper-Id': xShopperId } });
  }

  async cancel(subscriptionId, xAppKey, xShopperId = null) {
    return this.call('DELETE', '/v1/subscriptions/{subscriptionId}', { pathParams: { subscriptionId }, headers: { 'X-App-Key': xAppKey, 'X-Shopper-Id': xShopperId } });
  }

  async get(subscriptionId, xAppKey, xShopperId = null) {
    return this.call('GET', '/v1/subscriptions/{subscriptionId}', { pathParams: { subscriptionId }, headers: { 'X-App-Key': xAppKey, 'X-Shopper-Id': xShopperId } });
  }

  async update(subscriptionId, xAppKey, subscription, xShopperId = null) {
    return this.call('PATCH', '/v1/subscriptions/{subscriptionId}', { pathParams: { subscriptionId }, headers: { 'X-App-Key': xAppKey, 'X-Shopper-Id': xShopperId }, body: subscription });
  }
}
