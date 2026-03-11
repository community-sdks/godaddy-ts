// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CustomerRegisterSchemaRequest extends BaseRequestDto {
  constructor({ customerId, tld, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.tld = tld;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      tld: this.tld,
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
