import { AbstractService } from './abstractService.js';

export class CountriesService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, CountriesService.BASE_URL);
  }

  async getCountries(marketId) {
    return this.call('GET', '/v1/countries', { queryParams: { marketId } });
  }

  async getCountry(countryKey, marketId) {
    return this.call('GET', '/v1/countries/{countryKey}', { pathParams: { countryKey }, queryParams: { marketId } });
  }
}
