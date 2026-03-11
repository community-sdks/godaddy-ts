import { BaseRequestDto } from '../../baseRequestDto.js';

export enum ListRequestDtoIncludesEnum {
  ADDONS = "addons",
  RELATIONS = "relations",
  RENEWOPTIONS = "renewOptions",
}
export enum ListRequestDtoSortEnum {
  EXPIRESAT = "expiresAt",
  _EXPIRESAT = "-expiresAt",
}

export interface ListRequestDtoParams {
  xAppKey?: string;
  xShopperId?: string;
  xMarketId?: string;
  productGroupKeys?: Array<string>;
  includes?: ListRequestDtoIncludesEnum;
  offset?: number;
  limit?: number;
  sort?: ListRequestDtoSortEnum;
}

export interface ListRequestDtoPathParams {
  [key: string]: unknown;
}

export interface ListRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface ListRequestDtoHeaders {
  [key: string]: unknown;
}

export class ListRequestDto extends BaseRequestDto {
  xAppKey?: string;
  xShopperId?: string;
  xMarketId?: string;
  productGroupKeys?: Array<string>;
  includes?: ListRequestDtoIncludesEnum;
  offset?: number;
  limit?: number;
  sort?: ListRequestDtoSortEnum;
  constructor({ xAppKey, xShopperId, xMarketId, productGroupKeys, includes, offset, limit, sort }: ListRequestDtoParams = {}) {
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
  toPathParams(): ListRequestDtoPathParams {
    return {};
  }
  toQueryParams(): ListRequestDtoQueryParams {
    return {
      productGroupKeys: this.productGroupKeys,
      includes: this.includes,
      offset: this.offset,
      limit: this.limit,
      sort: this.sort,
    };
  }
  toHeaders(): ListRequestDtoHeaders {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
      'X-Market-Id': this.xMarketId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
