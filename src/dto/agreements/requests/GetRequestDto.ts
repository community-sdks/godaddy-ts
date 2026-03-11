// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetRequestDto extends BaseRequestDto {
  constructor({ keys, xPrivateLabelId, xMarketId } = {}) {
    super();
    this.keys = keys;
    this.xPrivateLabelId = xPrivateLabelId;
    this.xMarketId = xMarketId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      keys: this.keys,
    };
  }

  toHeaders() {
    return {
      'X-Private-Label-Id': this.xPrivateLabelId,
      'X-Market-Id': this.xMarketId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
