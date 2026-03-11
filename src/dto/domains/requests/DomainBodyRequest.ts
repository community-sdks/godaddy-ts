import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainBodyRequestBodyType = Record<string, unknown>;

export interface DomainBodyRequestParams {
  domain?: string;
  body?: DomainBodyRequestBodyType;
  xShopperId?: string;
}

export interface DomainBodyRequestPathParams {
  [key: string]: unknown;
}

export interface DomainBodyRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainBodyRequestHeaders {
  [key: string]: unknown;
}

export class DomainBodyRequest extends BaseRequestDto {
  domain?: string;
  body?: DomainBodyRequestBodyType;
  xShopperId?: string;
  constructor({ domain, body, xShopperId }: DomainBodyRequestParams = {}) {
    super();
    this.domain = domain;
    this.body = body;
    this.xShopperId = xShopperId;
  }
  toPathParams(): DomainBodyRequestPathParams {
    return {
      domain: this.domain,
    };
  }
  toQueryParams(): DomainBodyRequestQueryParams {
    return {};
  }
  toHeaders(): DomainBodyRequestHeaders {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
