// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ListRequestDto extends BaseRequestDto {
  constructor({ xAppKey, xShopperId, xMarketId, productGroupKeys, includes, offset, limit, sort } = {}) {
    super();
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
    this.xMarketId = xMarketId;
    this.productGroupKeys = productGroupKeys;
    this.includes = includes;
    this.offset = offset;
    this.limit = limit;
    this.sort = sort;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      productGroupKeys: this.productGroupKeys,
      includes: this.includes,
      offset: this.offset,
      limit: this.limit,
      sort: this.sort,
    };
  }

  toHeaders() {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
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
