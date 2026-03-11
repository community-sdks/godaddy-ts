// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainForwardingResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.privateEmail = source.privateEmail;
    this.forwardingEmail = source.forwardingEmail;
    this.emailPreference = source.emailPreference;
  }
}
