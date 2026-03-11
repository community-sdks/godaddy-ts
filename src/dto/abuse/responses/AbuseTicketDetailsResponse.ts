// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class AbuseTicketDetailsResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.closed = source.closed;
    this.closedAt = source.closedAt;
    this.createdAt = source.createdAt;
    this.domainIp = source.domainIp;
    this.reporter = source.reporter;
    this.source = source.source;
    this.target = source.target;
    this.ticketId = source.ticketId;
    this.type = source.type;
  }
}
