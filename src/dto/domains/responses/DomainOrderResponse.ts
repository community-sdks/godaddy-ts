// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainOrderResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.currency = source.currency;
    this.itemCount = source.itemCount;
    this.orderId = source.orderId;
    this.total = source.total;
  }
}
