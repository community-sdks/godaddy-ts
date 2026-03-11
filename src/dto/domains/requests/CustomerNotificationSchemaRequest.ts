import { BaseRequestDto } from '../../baseRequestDto.js';

export enum CustomerNotificationSchemaRequestTypeEnum {
  AUTO_RENEWAL = "AUTO_RENEWAL",
  BACKORDER = "BACKORDER",
  BACKORDER_PURCHASE = "BACKORDER_PURCHASE",
  EXPIRY = "EXPIRY",
  PREMIUM = "PREMIUM",
  PRIVACY_PURCHASE = "PRIVACY_PURCHASE",
  REDEEM = "REDEEM",
  REGISTER = "REGISTER",
  RENEW = "RENEW",
  TRADE = "TRADE",
  TRANSFER = "TRANSFER",
}

export interface CustomerNotificationSchemaRequestParams {
  customerId?: string;
  type?: CustomerNotificationSchemaRequestTypeEnum;
  xRequestId?: string;
}

export interface CustomerNotificationSchemaRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerNotificationSchemaRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerNotificationSchemaRequestHeaders {
  [key: string]: unknown;
}

export class CustomerNotificationSchemaRequest extends BaseRequestDto {
  customerId?: string;
  type?: CustomerNotificationSchemaRequestTypeEnum;
  xRequestId?: string;
  constructor({ customerId, type, xRequestId }: CustomerNotificationSchemaRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.type = type;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerNotificationSchemaRequestPathParams {
    return {
      customerId: this.customerId,
      type: this.type,
    };
  }
  toQueryParams(): CustomerNotificationSchemaRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerNotificationSchemaRequestHeaders {
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
