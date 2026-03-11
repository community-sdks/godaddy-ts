// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainAvailabilityResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.available = source.available;
    this.currency = source.currency;
    this.definitive = source.definitive;
    this.domain = source.domain;
    this.period = source.period;
    this.price = source.price;
  }
}
