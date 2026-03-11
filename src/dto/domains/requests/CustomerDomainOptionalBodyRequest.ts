// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainOptionalBodyRequest extends BaseRequestDto {
  constructor({ customerId, domain, xRequestId, body } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.body = body;
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
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
