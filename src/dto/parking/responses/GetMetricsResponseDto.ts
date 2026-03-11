// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class GetMetricsResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.currencyId = source.currencyId;
    this.metrics = source.metrics;
    this.pagination = source.pagination;
  }
}
