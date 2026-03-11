// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateDomainVerificationResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
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
