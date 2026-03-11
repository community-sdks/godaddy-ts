// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateIdentifierResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.certificateId = source.certificateId;
  }
}
