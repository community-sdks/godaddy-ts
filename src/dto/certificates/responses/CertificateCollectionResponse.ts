import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateCollectionResponseData = Array<Record<string, unknown>>;

export class CertificateCollectionResponse extends BaseResponseDto {
  items: CertificateCollectionResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as CertificateCollectionResponseData) : [];
  }
}
