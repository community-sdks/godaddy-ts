// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerIdRequest extends BaseRequestDto {
  constructor({ customerId, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
