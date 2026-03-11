// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ReplaceCertificateCallbackRequest extends BaseRequestDto {
  constructor({ certificateId, callbackUrl } = {}) {
    super();
    this.certificateId = certificateId;
    this.callbackUrl = callbackUrl;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
    };
  }

  toQueryParams() {
    return {
      callbackUrl: this.callbackUrl,
    };
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
