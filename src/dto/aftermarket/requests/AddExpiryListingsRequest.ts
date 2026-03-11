import { BaseRequestDto } from '../../baseRequestDto.js';

export interface AddExpiryListingsRequestParams {
  expiryListings?: Array<Record<string, unknown>>;
}

export interface AddExpiryListingsRequestPathParams {
  [key: string]: unknown;
}

export interface AddExpiryListingsRequestQueryParams {
  [key: string]: unknown;
}

export interface AddExpiryListingsRequestHeaders {
  [key: string]: unknown;
}

export class AddExpiryListingsRequest extends BaseRequestDto {
  expiryListings?: Array<Record<string, unknown>>;
  constructor({ expiryListings }: AddExpiryListingsRequestParams = {}) {
    super();
    this.expiryListings = expiryListings;
  }
  toPathParams(): AddExpiryListingsRequestPathParams {
    return {};
  }
  toQueryParams(): AddExpiryListingsRequestQueryParams {
    return {};
  }
  toHeaders(): AddExpiryListingsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.expiryListings;
  }
  isMultipart(): boolean {
    return false;
  }
}
