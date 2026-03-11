import { BaseResponseDto } from '../../baseResponseDto.js';

export type GetMetricsResponseDtoPaginationType = Record<string, unknown>;

export enum GetMetricsResponseDtoCurrencyIdEnum {
  USD = "USD",
}

export interface GetMetricsResponseDtoData {
  currencyId?: GetMetricsResponseDtoCurrencyIdEnum;
  metrics?: Array<Record<string, unknown>>;
  pagination?: GetMetricsResponseDtoPaginationType;
}

export class GetMetricsResponseDto extends BaseResponseDto {
  currencyId?: GetMetricsResponseDtoCurrencyIdEnum;
  metrics?: Array<Record<string, unknown>>;
  pagination?: GetMetricsResponseDtoPaginationType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: GetMetricsResponseDtoData = raw && typeof raw === 'object' ? (raw as GetMetricsResponseDtoData) : {};
    this.currencyId = source.currencyId;
    this.metrics = source.metrics;
    this.pagination = source.pagination;
  }
}
