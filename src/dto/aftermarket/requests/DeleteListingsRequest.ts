// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DeleteListingsRequest extends BaseRequestDto {
  constructor({ domains } = {}) {
    super();
    this.domains = domains;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      domains: this.domains,
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
