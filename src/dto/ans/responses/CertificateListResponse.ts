import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateListResponseData = Array<Record<string, unknown>>;

export class CertificateListResponse extends BaseResponseDto {
  items: CertificateListResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as CertificateListResponseData) : [];
  }
}
