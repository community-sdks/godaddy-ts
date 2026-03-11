// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainTypeNameBodyRequest extends BaseRequestDto {
  constructor({ domain, type, name, records, xShopperId } = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.name = name;
    this.records = records;
    this.xShopperId = xShopperId;
  }

  toPathParams() {
    return {
      domain: this.domain,
      type: this.type,
      name: this.name,
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
