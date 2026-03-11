// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainUsageResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.details = source.details;
    this.quota = source.quota;
    this.total = source.total;
    this.yyyymm = source.yyyymm;
  }
}
