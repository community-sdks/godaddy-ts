// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class RenewCertificateRequest extends BaseRequestDto {
  constructor({ certificateId, renewCreate } = {}) {
    super();
    this.certificateId = certificateId;
    this.renewCreate = renewCreate;
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
    return this.renewCreate;
  }

  isMultipart() {
    return false;
  }
}
