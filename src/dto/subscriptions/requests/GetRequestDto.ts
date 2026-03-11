// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetRequestDto extends BaseRequestDto {
  constructor({ subscriptionId, xAppKey, xShopperId } = {}) {
    super();
    this.subscriptionId = subscriptionId;
    this.xAppKey = xAppKey;
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
    return null;
  }

  isMultipart() {
    return false;
  }
}
