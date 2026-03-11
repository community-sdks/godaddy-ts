// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DownloadCertificateByEntitlementRequest extends BaseRequestDto {
  constructor({ entitlementId } = {}) {
    super();
    this.entitlementId = entitlementId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      entitlementId: this.entitlementId,
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
