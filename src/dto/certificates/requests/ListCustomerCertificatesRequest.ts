// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ListCustomerCertificatesRequest extends BaseRequestDto {
  constructor({ customerId, offset, limit } = {}) {
    super();
    this.customerId = customerId;
    this.offset = offset;
    this.limit = limit;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {
      offset: this.offset,
      limit: this.limit,
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
