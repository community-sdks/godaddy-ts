// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainDetailsResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
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
