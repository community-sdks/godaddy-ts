// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CreateCertificateForEntitlementRequest extends BaseRequestDto {
  constructor({ subscriptionCertificateCreate, xMarketId } = {}) {
    super();
    this.subscriptionCertificateCreate = subscriptionCertificateCreate;
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
    return this.subscriptionCertificateCreate;
  }

  isMultipart() {
    return false;
  }
}
