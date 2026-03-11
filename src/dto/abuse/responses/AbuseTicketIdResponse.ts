// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class AbuseTicketIdResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.u_number = source.u_number;
  }
}
