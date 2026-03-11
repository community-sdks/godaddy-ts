import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetRequestDtoParams {
  orderId?: unknown;
  xAppKey?: string;
  xShopperId?: string;
  xMarketId?: unknown;
}

export interface GetRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetRequestDto extends BaseRequestDto {
  orderId?: unknown;
  xAppKey?: string;
  xShopperId?: string;
  xMarketId?: unknown;
  constructor({ orderId, xAppKey, xShopperId, xMarketId }: GetRequestDtoParams = {}) {
    super();
    this.orderId = orderId;
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
    this.xMarketId = xMarketId;
  }
  toPathParams(): GetRequestDtoPathParams {
    return {
      orderId: this.orderId,
    };
  }
  toQueryParams(): GetRequestDtoQueryParams {
    return {};
  }
  toHeaders(): GetRequestDtoHeaders {
    return {
      'X-Shopper-Id': this.xShopperId,
      'X-Market-Id': this.xMarketId,
      'X-App-Key': this.xAppKey,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
