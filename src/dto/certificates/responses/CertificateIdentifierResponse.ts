import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CertificateIdentifierResponseData {
  certificateId?: string;
}

export class CertificateIdentifierResponse extends BaseResponseDto {
  certificateId?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateIdentifierResponseData = raw && typeof raw === 'object' ? (raw as CertificateIdentifierResponseData) : {};
    this.certificateId = source.certificateId;
  }
}
