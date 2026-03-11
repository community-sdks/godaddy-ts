// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class ListingsResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.listings = source.listings;
    this.pagination = source.pagination;
  }
}
