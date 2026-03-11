// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ResendCertificateEmailToAddressRequest extends BaseRequestDto {
  constructor({ certificateId, emailId, emailAddress } = {}) {
    super();
    this.certificateId = certificateId;
    this.emailId = emailId;
    this.emailAddress = emailAddress;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
      emailId: this.emailId,
      emailAddress: this.emailAddress,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
