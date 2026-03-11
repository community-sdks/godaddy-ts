import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateActionListResponseData = Array<Record<string, unknown>>;

export class CertificateActionListResponse extends BaseResponseDto {
  items: CertificateActionListResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as CertificateActionListResponseData) : [];
  }
}
