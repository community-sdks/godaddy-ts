import { AbstractService } from './abstractService.js';

export class ShoppersService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, ShoppersService.BASE_URL);
  }

  async createSubaccount(subaccount) {
    return this.call('POST', '/v1/shoppers/subaccount', { body: subaccount });
  }

  async get(shopperId, includes = null) {
    return this.call('GET', '/v1/shoppers/{shopperId}', { pathParams: { shopperId }, queryParams: { includes } });
  }

  async update(shopperId, shopper) {
    return this.call('POST', '/v1/shoppers/{shopperId}', { pathParams: { shopperId }, body: shopper });
  }

  async delete(shopperId, auditClientIp) {
    return this.call('DELETE', '/v1/shoppers/{shopperId}', { pathParams: { shopperId }, queryParams: { auditClientIp } });
  }

  async getStatus(shopperId, auditClientIp) {
    return this.call('GET', '/v1/shoppers/{shopperId}/status', { pathParams: { shopperId }, queryParams: { auditClientIp } });
  }

  async changePassword(shopperId, secret) {
    return this.call('PUT', '/v1/shoppers/{shopperId}/factors/password', { pathParams: { shopperId }, body: secret });
  }
}
