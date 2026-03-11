// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  GetCountriesRequestDto,
  GetCountryRequestDto,
} from '../dto/countries/requests/index.js';
import {
  GetCountriesResponseDto,
  GetCountryResponseDto,
} from '../dto/countries/responses/index.js';

export class CountriesService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    getCountries: GetCountriesRequestDto,
    getCountry: GetCountryRequestDto,
  };

  static responseDtos = {
    getCountries: GetCountriesResponseDto,
    getCountry: GetCountryResponseDto,
  };

  constructor(client) {
    super(client, CountriesService.BASE_URL);
  }

  async getCountries(request = new GetCountriesRequestDto()) {
    const requestDto = GetCountriesRequestDto.from(request);
    const response = await this.call('GET', '/v1/countries', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetCountriesResponseDto.from(response);
  }

  async getCountry(request = new GetCountryRequestDto()) {
    const requestDto = GetCountryRequestDto.from(request);
    const response = await this.call('GET', '/v1/countries/{countryKey}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetCountryResponseDto.from(response);
  }
}
