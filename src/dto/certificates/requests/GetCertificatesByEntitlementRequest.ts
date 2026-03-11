// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCertificatesByEntitlementRequest extends BaseRequestDto {
  constructor({ entitlementId, latest } = {}) {
    super();
    this.entitlementId = entitlementId;
    this.latest = latest;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      entitlementId: this.entitlementId,
      latest: this.latest,
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
