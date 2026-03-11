// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateAcmeExternalAccountBindingResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.directoryUrl = source.directoryUrl;
    this.keyId = source.keyId;
    this.hmacKey = source.hmacKey;
  }
}
