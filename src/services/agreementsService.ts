import { AbstractService } from './abstractService.js';

export class AgreementsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, AgreementsService.BASE_URL);
  }

  async get(keys, xPrivateLabelId = null, xMarketId = null) {
    return this.call('GET', '/v1/agreements', { queryParams: { 'keys': keys }, headers: { 'X-Private-Label-Id': xPrivateLabelId, 'X-Market-Id': xMarketId } });
  }
}
