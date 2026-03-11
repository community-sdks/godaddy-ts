// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainPurchaseRequest extends BaseRequestDto {
  constructor({ body, xShopperId } = {}) {
    super();
    this.body = body;
    this.xShopperId = xShopperId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
