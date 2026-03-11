import { BaseResponseDto } from '../../baseResponseDto.js';

export interface DomainAvailabilityResponseData {
  available?: boolean;
  currency?: string;
  definitive?: boolean;
  domain?: string;
  period?: number;
  price?: number;
}

export class DomainAvailabilityResponse extends BaseResponseDto {
  available?: boolean;
  currency?: string;
  definitive?: boolean;
  domain?: string;
  period?: number;
  price?: number;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainAvailabilityResponseData = raw && typeof raw === 'object' ? (raw as DomainAvailabilityResponseData) : {};
    this.available = source.available;
    this.currency = source.currency;
    this.definitive = source.definitive;
    this.domain = source.domain;
    this.period = source.period;
    this.price = source.price;
  }
}
