// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class GetMetricsByDomainResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.currencyId = source.currencyId;
    this.metrics = source.metrics;
    this.pagination = source.pagination;
    this.startDate = source.startDate;
    this.endDate = source.endDate;
  }
}
