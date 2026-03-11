// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCertificateEmailHistoryRequest extends BaseRequestDto {
  constructor({ certificateId } = {}) {
    super();
    this.certificateId = certificateId;
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
    return null;
  }

  isMultipart() {
    return false;
  }
}
