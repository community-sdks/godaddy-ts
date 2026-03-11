// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainReasonRequest extends BaseRequestDto {
  constructor({ customerId, domain, xRequestId, reason } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.reason = reason;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }

  toQueryParams() {
    return {
      reason: this.reason,
    };
  }

  toHeaders() {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
