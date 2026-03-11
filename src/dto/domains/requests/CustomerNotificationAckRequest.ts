import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CustomerNotificationAckRequestParams {
  customerId?: string;
  notificationId?: string;
  xRequestId?: string;
}

export interface CustomerNotificationAckRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerNotificationAckRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerNotificationAckRequestHeaders {
  [key: string]: unknown;
}

export class CustomerNotificationAckRequest extends BaseRequestDto {
  customerId?: string;
  notificationId?: string;
  xRequestId?: string;
  constructor({ customerId, notificationId, xRequestId }: CustomerNotificationAckRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.notificationId = notificationId;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerNotificationAckRequestPathParams {
    return {
      customerId: this.customerId,
      notificationId: this.notificationId,
    };
  }
  toQueryParams(): CustomerNotificationAckRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerNotificationAckRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
