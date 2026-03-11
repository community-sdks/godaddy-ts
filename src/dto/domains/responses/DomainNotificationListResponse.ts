import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainNotificationListResponseMetadataType = Record<string, unknown>;

export enum DomainNotificationListResponseTypeEnum {
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
export enum DomainNotificationListResponseResourceTypeEnum {
  CONTACT = "CONTACT",
  DOMAIN = "DOMAIN",
  HOST = "HOST",
}
export enum DomainNotificationListResponseStatusEnum {
  AWAITING = "AWAITING",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export interface DomainNotificationListResponseData {
  notificationId?: string;
  type?: DomainNotificationListResponseTypeEnum;
  resource?: string;
  resourceType?: DomainNotificationListResponseResourceTypeEnum;
  status?: DomainNotificationListResponseStatusEnum;
  addedAt?: string;
  requestId?: string;
  metadata?: DomainNotificationListResponseMetadataType;
}

export class DomainNotificationListResponse extends BaseResponseDto {
  notificationId?: string;
  type?: DomainNotificationListResponseTypeEnum;
  resource?: string;
  resourceType?: DomainNotificationListResponseResourceTypeEnum;
  status?: DomainNotificationListResponseStatusEnum;
  addedAt?: string;
  requestId?: string;
  metadata?: DomainNotificationListResponseMetadataType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainNotificationListResponseData = raw && typeof raw === 'object' ? (raw as DomainNotificationListResponseData) : {};
    this.notificationId = source.notificationId;
    this.type = source.type;
    this.resource = source.resource;
    this.resourceType = source.resourceType;
    this.status = source.status;
    this.addedAt = source.addedAt;
    this.requestId = source.requestId;
    this.metadata = source.metadata;
  }
}
