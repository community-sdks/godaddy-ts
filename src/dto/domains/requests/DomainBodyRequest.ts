// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainBodyRequest extends BaseRequestDto {
  constructor({ domain, body, xShopperId } = {}) {
    super();
    this.domain = domain;
    this.body = body;
    this.xShopperId = xShopperId;
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
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
