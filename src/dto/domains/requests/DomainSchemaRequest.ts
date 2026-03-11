// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainSchemaRequest extends BaseRequestDto {
  constructor({ tld } = {}) {
    super();
    this.tld = tld;
  }

  toPathParams() {
    return {
      tld: this.tld,
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
