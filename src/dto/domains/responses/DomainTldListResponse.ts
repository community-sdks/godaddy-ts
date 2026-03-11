import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainTldListResponseData = Array<Record<string, unknown>>;

export class DomainTldListResponse extends BaseResponseDto {
  items: DomainTldListResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as DomainTldListResponseData) : [];
  }
}
