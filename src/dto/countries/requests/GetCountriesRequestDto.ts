import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCountriesRequestDtoParams {
  marketId?: string;
}

export interface GetCountriesRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetCountriesRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetCountriesRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetCountriesRequestDto extends BaseRequestDto {
  marketId?: string;
  constructor({ marketId }: GetCountriesRequestDtoParams = {}) {
    super();
    this.marketId = marketId;
  }
  toPathParams(): GetCountriesRequestDtoPathParams {
    return {};
  }
  toQueryParams(): GetCountriesRequestDtoQueryParams {
    return {
      marketId: this.marketId,
    };
  }
  toHeaders(): GetCountriesRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
