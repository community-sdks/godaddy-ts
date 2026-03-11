import { BaseResponseDto } from '../../baseResponseDto.js';

export type GetMetricsByDomainResponseDtoPaginationType = Record<string, unknown>;

export enum GetMetricsByDomainResponseDtoCurrencyIdEnum {
  USD = "USD",
}

export interface GetMetricsByDomainResponseDtoData {
  currencyId?: GetMetricsByDomainResponseDtoCurrencyIdEnum;
  metrics?: Array<Record<string, unknown>>;
  pagination?: GetMetricsByDomainResponseDtoPaginationType;
  startDate?: string;
  endDate?: string;
}

export class GetMetricsByDomainResponseDto extends BaseResponseDto {
  currencyId?: GetMetricsByDomainResponseDtoCurrencyIdEnum;
  metrics?: Array<Record<string, unknown>>;
  pagination?: GetMetricsByDomainResponseDtoPaginationType;
  startDate?: string;
  endDate?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: GetMetricsByDomainResponseDtoData = raw && typeof raw === 'object' ? (raw as GetMetricsByDomainResponseDtoData) : {};
    this.currencyId = source.currencyId;
    this.metrics = source.metrics;
    this.pagination = source.pagination;
    this.startDate = source.startDate;
    this.endDate = source.endDate;
  }
}
