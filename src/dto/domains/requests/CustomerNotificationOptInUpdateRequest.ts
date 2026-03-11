// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerNotificationOptInUpdateRequest extends BaseRequestDto {
  constructor({ customerId, types, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.types = types;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {
      types: this.types,
    };
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
