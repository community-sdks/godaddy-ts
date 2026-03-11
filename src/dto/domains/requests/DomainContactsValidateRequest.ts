import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainContactsValidateRequestBodyType = Record<string, unknown>;

export interface DomainContactsValidateRequestParams {
  body?: DomainContactsValidateRequestBodyType;
  xPrivateLabelId?: number;
  marketId?: string;
}

export interface DomainContactsValidateRequestPathParams {
  [key: string]: unknown;
}

export interface DomainContactsValidateRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainContactsValidateRequestHeaders {
  [key: string]: unknown;
}

export class DomainContactsValidateRequest extends BaseRequestDto {
  body?: DomainContactsValidateRequestBodyType;
  xPrivateLabelId?: number;
  marketId?: string;
  constructor({ body, xPrivateLabelId, marketId }: DomainContactsValidateRequestParams = {}) {
    super();
    this.body = body;
    this.xPrivateLabelId = xPrivateLabelId;
    this.marketId = marketId;
  }
  toPathParams(): DomainContactsValidateRequestPathParams {
    return {};
  }
  toQueryParams(): DomainContactsValidateRequestQueryParams {
    return {
      marketId: this.marketId,
    };
  }
  toHeaders(): DomainContactsValidateRequestHeaders {
    return {
      'X-Private-Label-Id': this.xPrivateLabelId,
    };
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
