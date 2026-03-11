import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateDomainVerificationResponseCertificateAuthorityAuthorizationType = Record<string, unknown>;

export enum CertificateDomainVerificationResponseStatusEnum {
  COMPLETED = "COMPLETED",
  FAILED_VERIFICATION = "FAILED_VERIFICATION",
  VERIFIED_POSSIBLE_FRAUD = "VERIFIED_POSSIBLE_FRAUD",
  DROPPED = "DROPPED",
  DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION = "DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION",
  DROPPED_GOOGLE_SAFE_BROWSING = "DROPPED_GOOGLE_SAFE_BROWSING",
  INVALID = "INVALID",
  AWAITING = "AWAITING",
  PENDING_POSSIBLE_FRAUD = "PENDING_POSSIBLE_FRAUD",
  REVOKED_CERTIFICATE = "REVOKED_CERTIFICATE",
}
export enum CertificateDomainVerificationResponseTypeEnum {
  DOMAIN_CONTROL_EMAIL = "DOMAIN_CONTROL_EMAIL",
  AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN",
  AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR",
  AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER",
  AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER",
  AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER",
  DOMAIN_ACCESS_EMAIL = "DOMAIN_ACCESS_EMAIL",
  DOMAIN_ACCESS_LETTER = "DOMAIN_ACCESS_LETTER",
  DOMAIN_ZONE_CONTROL = "DOMAIN_ZONE_CONTROL",
  MANUAL_DOMAIN_ACCESS_EMAIL = "MANUAL_DOMAIN_ACCESS_EMAIL",
  PREVIOUS_DOMAIN_ACCESS_EMAIL = "PREVIOUS_DOMAIN_ACCESS_EMAIL",
  REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER = "REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER",
  REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL = "REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL",
  REGISTRATION_AUTHORITY_OVERRIDE = "REGISTRATION_AUTHORITY_OVERRIDE",
  REGISTRATION_AUTHORITY_WEBSITE_CONTROL = "REGISTRATION_AUTHORITY_WEBSITE_CONTROL",
  CUSTOMER_OWNED = "CUSTOMER_OWNED",
  WEBSITE_CONTROL = "WEBSITE_CONTROL",
}
export enum CertificateDomainVerificationResponseUsageEnum {
  COMMON_NAME = "COMMON_NAME",
  SUBJECT_ALTERNATIVE_NAME = "SUBJECT_ALTERNATIVE_NAME",
}

export interface CertificateDomainVerificationResponseData {
  domain?: string;
  domainEntityId?: number;
  dceToken?: string;
  status?: CertificateDomainVerificationResponseStatusEnum;
  createdAt?: string;
  modifiedAt?: string;
  type?: CertificateDomainVerificationResponseTypeEnum;
  usage?: CertificateDomainVerificationResponseUsageEnum;
  certificateAuthorityAuthorization?: CertificateDomainVerificationResponseCertificateAuthorityAuthorizationType;
}

export class CertificateDomainVerificationResponse extends BaseResponseDto {
  domain?: string;
  domainEntityId?: number;
  dceToken?: string;
  status?: CertificateDomainVerificationResponseStatusEnum;
  createdAt?: string;
  modifiedAt?: string;
  type?: CertificateDomainVerificationResponseTypeEnum;
  usage?: CertificateDomainVerificationResponseUsageEnum;
  certificateAuthorityAuthorization?: CertificateDomainVerificationResponseCertificateAuthorityAuthorizationType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateDomainVerificationResponseData = raw && typeof raw === 'object' ? (raw as CertificateDomainVerificationResponseData) : {};
    this.domain = source.domain;
    this.domainEntityId = source.domainEntityId;
    this.dceToken = source.dceToken;
    this.status = source.status;
    this.createdAt = source.createdAt;
    this.modifiedAt = source.modifiedAt;
    this.type = source.type;
    this.usage = source.usage;
    this.certificateAuthorityAuthorization = source.certificateAuthorityAuthorization;
  }
}
