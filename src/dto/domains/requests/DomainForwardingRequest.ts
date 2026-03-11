// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainForwardingRequest extends BaseRequestDto {
  constructor({ customerId, fqdn } = {}) {
    super();
    this.customerId = customerId;
    this.fqdn = fqdn;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      fqdn: this.fqdn,
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
