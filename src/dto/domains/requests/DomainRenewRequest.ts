import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainRenewRequestBodyType = Record<string, unknown>;

export interface DomainRenewRequestParams {
  domain?: string;
  xShopperId?: string;
  body?: DomainRenewRequestBodyType;
}

export interface DomainRenewRequestPathParams {
  [key: string]: unknown;
}

export interface DomainRenewRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainRenewRequestHeaders {
  [key: string]: unknown;
}

export class DomainRenewRequest extends BaseRequestDto {
  domain?: string;
  xShopperId?: string;
  body?: DomainRenewRequestBodyType;
  constructor({ domain, xShopperId, body }: DomainRenewRequestParams = {}) {
    super();
    this.domain = domain;
    this.xShopperId = xShopperId;
    this.body = body;
  }
  toPathParams(): DomainRenewRequestPathParams {
    return {
      domain: this.domain,
    };
  }
  toQueryParams(): DomainRenewRequestQueryParams {
    return {};
  }
  toHeaders(): DomainRenewRequestHeaders {
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
