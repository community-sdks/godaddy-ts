import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ListCustomerCertificatesRequestParams {
  customerId?: unknown;
  offset?: unknown;
  limit?: unknown;
}

export interface ListCustomerCertificatesRequestPathParams {
  [key: string]: unknown;
}

export interface ListCustomerCertificatesRequestQueryParams {
  [key: string]: unknown;
}

export interface ListCustomerCertificatesRequestHeaders {
  [key: string]: unknown;
}

export class ListCustomerCertificatesRequest extends BaseRequestDto {
  customerId?: unknown;
  offset?: unknown;
  limit?: unknown;
  constructor({ customerId, offset, limit }: ListCustomerCertificatesRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.offset = offset;
    this.limit = limit;
  }
  toPathParams(): ListCustomerCertificatesRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): ListCustomerCertificatesRequestQueryParams {
    return {
      offset: this.offset,
      limit: this.limit,
    };
  }
  toHeaders(): ListCustomerCertificatesRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
