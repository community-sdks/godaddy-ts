// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class UpdateRequestDto extends BaseRequestDto {
  constructor({ subscriptionId, xAppKey, subscription, xShopperId } = {}) {
    super();
    this.subscriptionId = subscriptionId;
    this.xAppKey = xAppKey;
    this.subscription = subscription;
    this.xShopperId = xShopperId;
  }

  toPathParams() {
    return {
      subscriptionId: this.subscriptionId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return this.subscription;
  }

  isMultipart() {
    return false;
  }
}
