import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetRequestDtoParams {
  subscriptionId?: string;
  xAppKey?: string;
  xShopperId?: string;
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
  subscriptionId?: string;
  xAppKey?: string;
  xShopperId?: string;
  constructor({ subscriptionId, xAppKey, xShopperId }: GetRequestDtoParams = {}) {
    super();
    this.subscriptionId = subscriptionId;
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
  }
  toPathParams(): GetRequestDtoPathParams {
    return {
      subscriptionId: this.subscriptionId,
    };
  }
  toQueryParams(): GetRequestDtoQueryParams {
    return {};
  }
  toHeaders(): GetRequestDtoHeaders {
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
