import { BaseResponseDto } from '../../baseResponseDto.js';

export interface AbuseTicketIdResponseData {
  u_number?: string;
}

export class AbuseTicketIdResponse extends BaseResponseDto {
  u_number?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: AbuseTicketIdResponseData = raw && typeof raw === 'object' ? (raw as AbuseTicketIdResponseData) : {};
    this.u_number = source.u_number;
  }
}
