import { BaseRequestDto } from '../../baseRequestDto.js';

export enum CustomerNotificationOptInUpdateRequestTypesItemEnum {
  AUTH_CODE_PURCHASE = "AUTH_CODE_PURCHASE",
  AUTH_CODE_REGENERATE = "AUTH_CODE_REGENERATE",
  AUTO_RENEWAL = "AUTO_RENEWAL",
  BACKORDER = "BACKORDER",
  BACKORDER_PURCHASE = "BACKORDER_PURCHASE",
  BACKORDER_DELETE = "BACKORDER_DELETE",
  BACKORDER_UPDATE = "BACKORDER_UPDATE",
  CHANGE_OF_REGISTRANT_DELETE = "CHANGE_OF_REGISTRANT_DELETE",
  CONTACT_CREATE = "CONTACT_CREATE",
  CONTACT_DELETE = "CONTACT_DELETE",
  CONTACT_UPDATE = "CONTACT_UPDATE",
  DNS_VERIFICATION = "DNS_VERIFICATION",
  DNSSEC_CREATE = "DNSSEC_CREATE",
  DNSSEC_DELETE = "DNSSEC_DELETE",
  DOMAIN_DELETE = "DOMAIN_DELETE",
  DOMAIN_UPDATE = "DOMAIN_UPDATE",
  DOMAIN_UPDATE_CONTACTS = "DOMAIN_UPDATE_CONTACTS",
  DOMAIN_UPDATE_NAME_SERVERS = "DOMAIN_UPDATE_NAME_SERVERS",
  EXPIRY = "EXPIRY",
  HOST_CREATE = "HOST_CREATE",
  HOST_DELETE = "HOST_DELETE",
  ICANN_VERIFICATION = "ICANN_VERIFICATION",
  MIGRATE = "MIGRATE",
  MIGRATE_IN = "MIGRATE_IN",
  PREMIUM = "PREMIUM",
  PRIVACY_FORWARDING_UPDATE = "PRIVACY_FORWARDING_UPDATE",
  PRIVACY_PURCHASE = "PRIVACY_PURCHASE",
  PRIVACY_DELETE = "PRIVACY_DELETE",
  REDEEM = "REDEEM",
  REGISTER = "REGISTER",
  RENEW = "RENEW",
  RENEW_UNDO = "RENEW_UNDO",
  TRADE = "TRADE",
  TRADE_CANCEL = "TRADE_CANCEL",
  TRADE_PURCHASE = "TRADE_PURCHASE",
  TRADE_PURCHASE_AUTH_TEXT_MESSAGE = "TRADE_PURCHASE_AUTH_TEXT_MESSAGE",
  TRADE_RESEND_AUTH_EMAIL = "TRADE_RESEND_AUTH_EMAIL",
  TRANSFER = "TRANSFER",
  TRANSFER_IN = "TRANSFER_IN",
  TRANSFER_IN_ACCEPT = "TRANSFER_IN_ACCEPT",
  TRANSFER_IN_CANCEL = "TRANSFER_IN_CANCEL",
  TRANSFER_IN_RESTART = "TRANSFER_IN_RESTART",
  TRANSFER_IN_RETRY = "TRANSFER_IN_RETRY",
  TRANSFER_OUT = "TRANSFER_OUT",
  TRANSFER_OUT_ACCEPT = "TRANSFER_OUT_ACCEPT",
  TRANSFER_OUT_REJECT = "TRANSFER_OUT_REJECT",
  TRANSFER_OUT_REQUESTED = "TRANSFER_OUT_REQUESTED",
  TRANSIT = "TRANSIT",
}

export interface CustomerNotificationOptInUpdateRequestParams {
  customerId?: string;
  types?: Array<CustomerNotificationOptInUpdateRequestTypesItemEnum>;
  xRequestId?: string;
}

export interface CustomerNotificationOptInUpdateRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerNotificationOptInUpdateRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerNotificationOptInUpdateRequestHeaders {
  [key: string]: unknown;
}

export class CustomerNotificationOptInUpdateRequest extends BaseRequestDto {
  customerId?: string;
  types?: Array<CustomerNotificationOptInUpdateRequestTypesItemEnum>;
  xRequestId?: string;
  constructor({ customerId, types, xRequestId }: CustomerNotificationOptInUpdateRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.types = types;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerNotificationOptInUpdateRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): CustomerNotificationOptInUpdateRequestQueryParams {
    return {
      types: this.types,
    };
  }
  toHeaders(): CustomerNotificationOptInUpdateRequestHeaders {
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
