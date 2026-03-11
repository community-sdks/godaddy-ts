// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class PlaceBidsRequestDto extends BaseRequestDto {
  constructor({ customerId, requestBody } = {}) {
    super();
    this.customerId = customerId;
    this.requestBody = requestBody;
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
    return this.requestBody;
  }

  isMultipart() {
    return false;
  }
}
