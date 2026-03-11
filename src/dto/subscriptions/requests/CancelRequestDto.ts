import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CancelRequestDtoParams {
  subscriptionId?: string;
  xAppKey?: string;
  xShopperId?: string;
}

export interface CancelRequestDtoPathParams {
  [key: string]: unknown;
}

export interface CancelRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface CancelRequestDtoHeaders {
  [key: string]: unknown;
}

export class CancelRequestDto extends BaseRequestDto {
  subscriptionId?: string;
  xAppKey?: string;
  xShopperId?: string;
  constructor({ subscriptionId, xAppKey, xShopperId }: CancelRequestDtoParams = {}) {
    super();
    this.subscriptionId = subscriptionId;
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
  }
  toPathParams(): CancelRequestDtoPathParams {
    return {
      subscriptionId: this.subscriptionId,
    };
  }
  toQueryParams(): CancelRequestDtoQueryParams {
    return {};
  }
  toHeaders(): CancelRequestDtoHeaders {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
