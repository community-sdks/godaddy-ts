// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class UpdateRequestDto extends BaseRequestDto {
  constructor({ shopperId, shopper } = {}) {
    super();
    this.shopperId = shopperId;
    this.shopper = shopper;
  }

  toPathParams() {
    return {
      shopperId: this.shopperId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.shopper;
  }

  isMultipart() {
    return false;
  }
}
