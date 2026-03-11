// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainContactsValidateRequest extends BaseRequestDto {
  constructor({ body, xPrivateLabelId, marketId } = {}) {
    super();
    this.body = body;
    this.xPrivateLabelId = xPrivateLabelId;
    this.marketId = marketId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      marketId: this.marketId,
    };
  }

  toHeaders() {
    return {
      'X-Private-Label-Id': this.xPrivateLabelId,
    };
  }

  toBody() {
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
