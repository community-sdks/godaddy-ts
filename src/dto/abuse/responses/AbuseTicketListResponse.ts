// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class AbuseTicketListResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.pagination = source.pagination;
    this.ticketIds = source.ticketIds;
  }
}
