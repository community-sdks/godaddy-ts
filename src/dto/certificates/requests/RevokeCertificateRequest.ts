// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class RevokeCertificateRequest extends BaseRequestDto {
  constructor({ certificateId, certificateRevoke } = {}) {
    super();
    this.certificateId = certificateId;
    this.certificateRevoke = certificateRevoke;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.certificateRevoke;
  }

  isMultipart() {
    return false;
  }
}
