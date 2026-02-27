import { AbstractService } from './abstractService.js';

export class OrdersService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, OrdersService.BASE_URL);
  }

  async list(xAppKey, periodStart = null, periodEnd = null, domain = null, productGroupId = null, paymentProfileId = null, parentOrderId = null, offset = null, limit = null, sort = null, xShopperId = null) {
    return this.call('GET', '/v1/orders', { queryParams: { periodStart, periodEnd, domain, productGroupId, paymentProfileId, parentOrderId, offset, limit, sort }, headers: { 'X-Shopper-Id': xShopperId, 'X-App-Key': xAppKey } });
  }

  async get(orderId, xAppKey, xShopperId = null, xMarketId = null) {
    return this.call('GET', '/v1/orders/{orderId}', { pathParams: { orderId }, headers: { 'X-Shopper-Id': xShopperId, 'X-Market-Id': xMarketId, 'X-App-Key': xAppKey } });
  }
}
