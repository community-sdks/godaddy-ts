import { BaseResponseDto } from '../../baseResponseDto.js';

export interface DomainBulkAvailabilityResponseData {
  domains?: Array<Record<string, unknown>>;
}

export class DomainBulkAvailabilityResponse extends BaseResponseDto {
  domains?: Array<Record<string, unknown>>;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainBulkAvailabilityResponseData = raw && typeof raw === 'object' ? (raw as DomainBulkAvailabilityResponseData) : {};
    this.domains = source.domains;
  }
}
