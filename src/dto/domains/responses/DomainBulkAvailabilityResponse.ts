// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainBulkAvailabilityResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.domains = source.domains;
  }
}
