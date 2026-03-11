// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ResendCertificateEmailRequest extends BaseRequestDto {
  constructor({ certificateId, emailId } = {}) {
    super();
    this.certificateId = certificateId;
    this.emailId = emailId;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
      emailId: this.emailId,
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
