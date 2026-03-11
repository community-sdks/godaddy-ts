import { BaseRequestDto } from '../../baseRequestDto.js';

export type CustomerDomainBodyRequestBodyType = Record<string, unknown>;

export interface CustomerDomainBodyRequestParams {
  customerId?: string;
  domain?: string;
  body?: CustomerDomainBodyRequestBodyType;
  xRequestId?: string;
}

export interface CustomerDomainBodyRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainBodyRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainBodyRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainBodyRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  body?: CustomerDomainBodyRequestBodyType;
  xRequestId?: string;
  constructor({ customerId, domain, body, xRequestId }: CustomerDomainBodyRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.body = body;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerDomainBodyRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainBodyRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerDomainBodyRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
