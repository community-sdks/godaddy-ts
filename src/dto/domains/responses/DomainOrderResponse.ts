import { BaseResponseDto } from '../../baseResponseDto.js';

export interface DomainOrderResponseData {
  currency?: string;
  itemCount?: number;
  orderId?: number;
  total?: number;
}

export class DomainOrderResponse extends BaseResponseDto {
  currency?: string;
  itemCount?: number;
  orderId?: number;
  total?: number;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainOrderResponseData = raw && typeof raw === 'object' ? (raw as DomainOrderResponseData) : {};
    this.currency = source.currency;
    this.itemCount = source.itemCount;
    this.orderId = source.orderId;
    this.total = source.total;
  }
}
