// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerRegisterValidateRequest extends BaseRequestDto {
  constructor({ customerId, body, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.body = body;
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
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
