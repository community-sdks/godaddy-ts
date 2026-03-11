import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainDetailsResponseContactAdminType = Record<string, unknown>;
export type DomainDetailsResponseContactBillingType = Record<string, unknown>;
export type DomainDetailsResponseContactRegistrantType = Record<string, unknown>;
export type DomainDetailsResponseContactTechType = Record<string, unknown>;
export type DomainDetailsResponseVerificationsType = Record<string, unknown>;

export interface DomainDetailsResponseData {
  authCode?: string;
  contactAdmin?: DomainDetailsResponseContactAdminType;
  contactBilling?: DomainDetailsResponseContactBillingType;
  contactRegistrant?: DomainDetailsResponseContactRegistrantType;
  contactTech?: DomainDetailsResponseContactTechType;
  createdAt?: string;
  deletedAt?: string;
  transferAwayEligibleAt?: string;
  domain?: string;
  domainId?: number;
  expirationProtected?: boolean;
  expires?: string;
  exposeRegistrantOrganization?: boolean;
  exposeWhois?: boolean;
  holdRegistrar?: boolean;
  locked?: boolean;
  nameServers?: Array<string>;
  privacy?: boolean;
  registrarCreatedAt?: string;
  renewAuto?: boolean;
  renewDeadline?: string;
  status?: string;
  subaccountId?: string;
  transferProtected?: boolean;
  verifications?: DomainDetailsResponseVerificationsType;
}

export class DomainDetailsResponse extends BaseResponseDto {
  authCode?: string;
  contactAdmin?: DomainDetailsResponseContactAdminType;
  contactBilling?: DomainDetailsResponseContactBillingType;
  contactRegistrant?: DomainDetailsResponseContactRegistrantType;
  contactTech?: DomainDetailsResponseContactTechType;
  createdAt?: string;
  deletedAt?: string;
  transferAwayEligibleAt?: string;
  domain?: string;
  domainId?: number;
  expirationProtected?: boolean;
  expires?: string;
  exposeRegistrantOrganization?: boolean;
  exposeWhois?: boolean;
  holdRegistrar?: boolean;
  locked?: boolean;
  nameServers?: Array<string>;
  privacy?: boolean;
  registrarCreatedAt?: string;
  renewAuto?: boolean;
  renewDeadline?: string;
  status?: string;
  subaccountId?: string;
  transferProtected?: boolean;
  verifications?: DomainDetailsResponseVerificationsType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainDetailsResponseData = raw && typeof raw === 'object' ? (raw as DomainDetailsResponseData) : {};
    this.authCode = source.authCode;
    this.contactAdmin = source.contactAdmin;
    this.contactBilling = source.contactBilling;
    this.contactRegistrant = source.contactRegistrant;
    this.contactTech = source.contactTech;
    this.createdAt = source.createdAt;
    this.deletedAt = source.deletedAt;
    this.transferAwayEligibleAt = source.transferAwayEligibleAt;
    this.domain = source.domain;
    this.domainId = source.domainId;
    this.expirationProtected = source.expirationProtected;
    this.expires = source.expires;
    this.exposeRegistrantOrganization = source.exposeRegistrantOrganization;
    this.exposeWhois = source.exposeWhois;
    this.holdRegistrar = source.holdRegistrar;
    this.locked = source.locked;
    this.nameServers = source.nameServers;
    this.privacy = source.privacy;
    this.registrarCreatedAt = source.registrarCreatedAt;
    this.renewAuto = source.renewAuto;
    this.renewDeadline = source.renewDeadline;
    this.status = source.status;
    this.subaccountId = source.subaccountId;
    this.transferProtected = source.transferProtected;
    this.verifications = source.verifications;
  }
}
