import { AbstractService } from './abstractService.js';

export class AftermarketService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, AftermarketService.BASE_URL);
  }

  async getListings(customerId, domains = null, listingStatus = null, transferBefore = null, transferAfter = null, limit = null, offset = null) {
    return this.call('GET', '/v1/customers/{customerId}/auctions/listings', { pathParams: { customerId }, queryParams: { domains, listingStatus, transferBefore, transferAfter, limit, offset } });
  }

  async deleteListings(domains) {
    return this.call('DELETE', '/v1/aftermarket/listings', { queryParams: { domains } });
  }

  async addExpiryListings(expiryListings) {
    return this.call('POST', '/v1/aftermarket/listings/expiry', { body: expiryListings });
  }
}
