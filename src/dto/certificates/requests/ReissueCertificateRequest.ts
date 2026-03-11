// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ReissueCertificateRequest extends BaseRequestDto {
  constructor({ certificateId, reissueCreate } = {}) {
    super();
    this.certificateId = certificateId;
    this.reissueCreate = reissueCreate;
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
    return this.reissueCreate;
  }

  isMultipart() {
    return false;
  }
}
