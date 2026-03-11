import { BaseResponseDto } from '../../baseResponseDto.js';

export interface DomainUsageResponseData {
  details?: Array<Record<string, unknown>>;
  quota?: number;
  total?: number;
  yyyymm?: string;
}

export class DomainUsageResponse extends BaseResponseDto {
  details?: Array<Record<string, unknown>>;
  quota?: number;
  total?: number;
  yyyymm?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainUsageResponseData = raw && typeof raw === 'object' ? (raw as DomainUsageResponseData) : {};
    this.details = source.details;
    this.quota = source.quota;
    this.total = source.total;
    this.yyyymm = source.yyyymm;
  }
}
