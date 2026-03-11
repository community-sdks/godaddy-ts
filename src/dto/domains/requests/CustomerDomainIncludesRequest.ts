// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainIncludesRequest extends BaseRequestDto {
  constructor({ customerId, domain, xRequestId, includes } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.includes = includes;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }

  toQueryParams() {
    return {
      includes: this.includes,
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
