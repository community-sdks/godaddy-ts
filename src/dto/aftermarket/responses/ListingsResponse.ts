import { BaseResponseDto } from '../../baseResponseDto.js';

export type ListingsResponsePaginationType = Record<string, unknown>;

export interface ListingsResponseData {
  listings?: Array<Record<string, unknown>>;
  pagination?: ListingsResponsePaginationType;
}

export class ListingsResponse extends BaseResponseDto {
  listings?: Array<Record<string, unknown>>;
  pagination?: ListingsResponsePaginationType;
  constructor(raw: unknown = null) {
    super(raw);
    const source: ListingsResponseData = raw && typeof raw === 'object' ? (raw as ListingsResponseData) : {};
    this.listings = source.listings;
    this.pagination = source.pagination;
  }
}
