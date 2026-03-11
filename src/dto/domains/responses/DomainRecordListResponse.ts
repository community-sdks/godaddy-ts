import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainRecordListResponseData = Record<string, unknown>;

export class DomainRecordListResponse extends BaseResponseDto {
  data: Record<string, unknown> | null;
  constructor(raw: unknown = null) {
    super(raw);
    this.data = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null;
  }
}
