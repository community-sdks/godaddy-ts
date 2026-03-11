import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CertificateAcmeExternalAccountBindingResponseData {
  directoryUrl?: string;
  keyId?: string;
  hmacKey?: string;
}

export class CertificateAcmeExternalAccountBindingResponse extends BaseResponseDto {
  directoryUrl?: string;
  keyId?: string;
  hmacKey?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateAcmeExternalAccountBindingResponseData = raw && typeof raw === 'object' ? (raw as CertificateAcmeExternalAccountBindingResponseData) : {};
    this.directoryUrl = source.directoryUrl;
    this.keyId = source.keyId;
    this.hmacKey = source.hmacKey;
  }
}
