// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ValidateCertificateRequest extends BaseRequestDto {
  constructor({ certificateCreate, xMarketId } = {}) {
    super();
    this.certificateCreate = certificateCreate;
    this.xMarketId = xMarketId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Market-Id': this.xMarketId,
    };
  }

  toBody() {
    return this.certificateCreate;
  }

  isMultipart() {
    return false;
  }
}
