import { BaseRequestDto } from '../../baseRequestDto.js';

export type UpdateRequestDtoSubscriptionType = Record<string, unknown>;

export interface UpdateRequestDtoParams {
  subscriptionId?: string;
  xAppKey?: string;
  subscription?: UpdateRequestDtoSubscriptionType;
  xShopperId?: string;
}

export interface UpdateRequestDtoPathParams {
  [key: string]: unknown;
}

export interface UpdateRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface UpdateRequestDtoHeaders {
  [key: string]: unknown;
}

export class UpdateRequestDto extends BaseRequestDto {
  subscriptionId?: string;
  xAppKey?: string;
  subscription?: UpdateRequestDtoSubscriptionType;
  xShopperId?: string;
  constructor({ subscriptionId, xAppKey, subscription, xShopperId }: UpdateRequestDtoParams = {}) {
    super();
    this.subscriptionId = subscriptionId;
    this.xAppKey = xAppKey;
    this.subscription = subscription;
    this.xShopperId = xShopperId;
  }
  toPathParams(): UpdateRequestDtoPathParams {
    return {
      subscriptionId: this.subscriptionId,
    };
  }
  toQueryParams(): UpdateRequestDtoQueryParams {
    return {};
  }
  toHeaders(): UpdateRequestDtoHeaders {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return this.subscription;
  }
  isMultipart(): boolean {
    return false;
  }
}
