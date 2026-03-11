// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerNotificationAckRequest extends BaseRequestDto {
  constructor({ customerId, notificationId, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.notificationId = notificationId;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      notificationId: this.notificationId,
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
