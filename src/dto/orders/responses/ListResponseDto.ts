// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class ListResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.orders = source.orders;
    this.pagination = source.pagination;
  }
}
