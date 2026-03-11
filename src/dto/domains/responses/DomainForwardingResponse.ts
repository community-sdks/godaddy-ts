import { BaseResponseDto } from '../../baseResponseDto.js';

export enum DomainForwardingResponseEmailPreferenceEnum {
  EMAIL_FILTER = "EMAIL_FILTER",
  EMAIL_SEND_ALL = "EMAIL_SEND_ALL",
  EMAIL_SEND_NONE = "EMAIL_SEND_NONE",
}

export interface DomainForwardingResponseData {
  privateEmail?: string;
  forwardingEmail?: string;
  emailPreference?: DomainForwardingResponseEmailPreferenceEnum;
}

export class DomainForwardingResponse extends BaseResponseDto {
  privateEmail?: string;
  forwardingEmail?: string;
  emailPreference?: DomainForwardingResponseEmailPreferenceEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainForwardingResponseData = raw && typeof raw === 'object' ? (raw as DomainForwardingResponseData) : {};
    this.privateEmail = source.privateEmail;
    this.forwardingEmail = source.forwardingEmail;
    this.emailPreference = source.emailPreference;
  }
}
