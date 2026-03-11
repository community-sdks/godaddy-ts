import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CustomerDomainRequestParams {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
}

export interface CustomerDomainRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  constructor({ customerId, domain, xRequestId }: CustomerDomainRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerDomainRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerDomainRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
