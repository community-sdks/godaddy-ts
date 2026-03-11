// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ProductGroupsRequestDto extends BaseRequestDto {
  constructor({ xAppKey, xShopperId } = {}) {
    super();
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-App-Key': this.xAppKey,
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
