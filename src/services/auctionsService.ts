import { AbstractService } from './abstractService.js';

export class AuctionsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, AuctionsService.BASE_URL);
  }

  async placeBids(customerId, requestBody) {
    return this.call('POST', '/v1/customers/{customerId}/aftermarket/listings/bids', { pathParams: { customerId }, body: requestBody });
  }
}
