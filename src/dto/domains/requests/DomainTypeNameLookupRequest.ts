// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainTypeNameLookupRequest extends BaseRequestDto {
  constructor({ domain, type, name, xShopperId, offset, limit } = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.name = name;
    this.xShopperId = xShopperId;
    this.offset = offset;
    this.limit = limit;
  }

  toPathParams() {
    return {
      domain: this.domain,
      type: this.type,
      name: this.name,
    };
  }

  toQueryParams() {
    return {
      offset: this.offset,
      limit: this.limit,
    };
  }

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
