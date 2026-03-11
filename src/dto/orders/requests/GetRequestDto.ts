// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetRequestDto extends BaseRequestDto {
  constructor({ orderId, xAppKey, xShopperId, xMarketId } = {}) {
    super();
    this.orderId = orderId;
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
    this.xMarketId = xMarketId;
  }

  toPathParams() {
    return {
      orderId: this.orderId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
      'X-Market-Id': this.xMarketId,
      'X-App-Key': this.xAppKey,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
