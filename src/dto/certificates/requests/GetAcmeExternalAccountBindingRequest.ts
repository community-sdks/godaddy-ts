// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetAcmeExternalAccountBindingRequest extends BaseRequestDto {
  constructor({ customerId } = {}) {
    super();
    this.customerId = customerId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
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
