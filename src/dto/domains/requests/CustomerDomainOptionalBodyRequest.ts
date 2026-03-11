import { BaseRequestDto } from '../../baseRequestDto.js';

export type CustomerDomainOptionalBodyRequestBodyType = Record<string, unknown>;

export interface CustomerDomainOptionalBodyRequestParams {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  body?: CustomerDomainOptionalBodyRequestBodyType;
}

export interface CustomerDomainOptionalBodyRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainOptionalBodyRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainOptionalBodyRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainOptionalBodyRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  body?: CustomerDomainOptionalBodyRequestBodyType;
  constructor({ customerId, domain, xRequestId, body }: CustomerDomainOptionalBodyRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.body = body;
  }
  toPathParams(): CustomerDomainOptionalBodyRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainOptionalBodyRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerDomainOptionalBodyRequestHeaders {
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
