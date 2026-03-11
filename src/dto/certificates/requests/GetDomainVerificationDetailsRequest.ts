// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetDomainVerificationDetailsRequest extends BaseRequestDto {
  constructor({ customerId, certificateId, domain } = {}) {
    super();
    this.customerId = customerId;
    this.certificateId = certificateId;
    this.domain = domain;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      certificateId: this.certificateId,
      domain: this.domain,
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
