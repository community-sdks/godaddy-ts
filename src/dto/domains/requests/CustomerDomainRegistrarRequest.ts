// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerDomainRegistrarRequest extends BaseRequestDto {
  constructor({ customerId, domain, registrar, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.registrar = registrar;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }

  toQueryParams() {
    return {
      registrar: this.registrar,
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
