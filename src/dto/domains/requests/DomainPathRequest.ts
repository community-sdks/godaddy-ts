// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainPathRequest extends BaseRequestDto {
  constructor({ domain } = {}) {
    super();
    this.domain = domain;
  }

  toPathParams() {
    return {
      domain: this.domain,
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
