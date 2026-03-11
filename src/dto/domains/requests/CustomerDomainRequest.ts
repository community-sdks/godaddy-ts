// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainRequest extends BaseRequestDto {
  constructor({ customerId, domain, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }

  toQueryParams() {
    return {};
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
