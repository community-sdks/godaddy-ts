import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainPurchaseRequestBodyType = Record<string, unknown>;

export interface DomainPurchaseRequestParams {
  body?: DomainPurchaseRequestBodyType;
  xShopperId?: string;
}

export interface DomainPurchaseRequestPathParams {
  [key: string]: unknown;
}

export interface DomainPurchaseRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainPurchaseRequestHeaders {
  [key: string]: unknown;
}

export class DomainPurchaseRequest extends BaseRequestDto {
  body?: DomainPurchaseRequestBodyType;
  xShopperId?: string;
  constructor({ body, xShopperId }: DomainPurchaseRequestParams = {}) {
    super();
    this.body = body;
    this.xShopperId = xShopperId;
  }
  toPathParams(): DomainPurchaseRequestPathParams {
    return {};
  }
  toQueryParams(): DomainPurchaseRequestQueryParams {
    return {};
  }
  toHeaders(): DomainPurchaseRequestHeaders {
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
