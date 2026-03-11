// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class AddAlternateEmailAddressRequest extends BaseRequestDto {
  constructor({ certificateId, emailAddress } = {}) {
    super();
    this.certificateId = certificateId;
    this.emailAddress = emailAddress;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
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
