// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainTypeBodyRequest extends BaseRequestDto {
  constructor({ domain, type, records, xShopperId } = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.records = records;
    this.xShopperId = xShopperId;
  }

  toPathParams() {
    return {
      domain: this.domain,
      type: this.type,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return this.records;
  }

  isMultipart() {
    return false;
  }
}
