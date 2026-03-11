// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainActionTypeRequest extends BaseRequestDto {
  constructor({ customerId, domain, type, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.type = type;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      domain: this.domain,
      type: this.type,
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
