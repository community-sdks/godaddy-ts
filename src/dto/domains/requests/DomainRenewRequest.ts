// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainRenewRequest extends BaseRequestDto {
  constructor({ domain, xShopperId, body } = {}) {
    super();
    this.domain = domain;
    this.xShopperId = xShopperId;
    this.body = body;
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
