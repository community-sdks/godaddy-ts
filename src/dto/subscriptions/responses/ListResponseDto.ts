import { BaseResponseDto } from '../../baseResponseDto.js';

export type ListResponseDtoPaginationType = Record<string, unknown>;

export interface ListResponseDtoData {
  orders?: Array<Record<string, unknown>>;
  pagination?: ListResponseDtoPaginationType;
}

export class ListResponseDto extends BaseResponseDto {
  orders?: Array<Record<string, unknown>>;
  pagination?: ListResponseDtoPaginationType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: ListResponseDtoData = raw && typeof raw === 'object' ? (raw as ListResponseDtoData) : {};
    this.orders = source.orders;
    this.pagination = source.pagination;
  }
}
