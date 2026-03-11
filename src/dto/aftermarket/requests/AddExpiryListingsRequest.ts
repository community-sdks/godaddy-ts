// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class AddExpiryListingsRequest extends BaseRequestDto {
  constructor({ expiryListings } = {}) {
    super();
    this.expiryListings = expiryListings;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.expiryListings;
  }

  isMultipart() {
    return false;
  }
}
