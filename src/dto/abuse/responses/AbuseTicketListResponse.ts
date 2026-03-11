import { BaseResponseDto } from '../../baseResponseDto.js';

export type AbuseTicketListResponsePaginationType = Record<string, unknown>;

export interface AbuseTicketListResponseData {
  pagination?: AbuseTicketListResponsePaginationType;
  ticketIds?: Array<string>;
}

export class AbuseTicketListResponse extends BaseResponseDto {
  pagination?: AbuseTicketListResponsePaginationType;
  ticketIds?: Array<string>;
  constructor(raw: unknown = null) {
    super(raw);
    const source: AbuseTicketListResponseData = raw && typeof raw === 'object' ? (raw as AbuseTicketListResponseData) : {};
    this.pagination = source.pagination;
    this.ticketIds = source.ticketIds;
  }
}
