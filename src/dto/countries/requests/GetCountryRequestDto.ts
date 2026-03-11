import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCountryRequestDtoParams {
  countryKey?: string;
  marketId?: string;
}

export interface GetCountryRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetCountryRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetCountryRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetCountryRequestDto extends BaseRequestDto {
  countryKey?: string;
  marketId?: string;
  constructor({ countryKey, marketId }: GetCountryRequestDtoParams = {}) {
    super();
    this.countryKey = countryKey;
    this.marketId = marketId;
  }
  toPathParams(): GetCountryRequestDtoPathParams {
    return {
      countryKey: this.countryKey,
    };
  }
  toQueryParams(): GetCountryRequestDtoQueryParams {
    return {
      marketId: this.marketId,
    };
  }
  toHeaders(): GetCountryRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
