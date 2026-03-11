// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerNotificationSchemaRequest extends BaseRequestDto {
  constructor({ customerId, type, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.type = type;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      type: this.type,
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
