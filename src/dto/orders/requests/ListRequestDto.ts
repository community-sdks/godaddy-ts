import { BaseRequestDto } from '../../baseRequestDto.js';

export enum ListRequestDtoSortEnum {
  EXPIRESAT = "expiresAt",
  _EXPIRESAT = "-expiresAt",
}

export interface ListRequestDtoParams {
  xAppKey?: string;
  periodStart?: unknown;
  periodEnd?: unknown;
  domain?: unknown;
  productGroupId?: unknown;
  paymentProfileId?: unknown;
  parentOrderId?: unknown;
  offset?: number;
  limit?: number;
  sort?: ListRequestDtoSortEnum;
  xShopperId?: string;
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
  periodStart?: unknown;
  periodEnd?: unknown;
  domain?: unknown;
  productGroupId?: unknown;
  paymentProfileId?: unknown;
  parentOrderId?: unknown;
  offset?: number;
  limit?: number;
  sort?: ListRequestDtoSortEnum;
  xShopperId?: string;
  constructor({ xAppKey, periodStart, periodEnd, domain, productGroupId, paymentProfileId, parentOrderId, offset, limit, sort, xShopperId }: ListRequestDtoParams = {}) {
    super();
    this.xAppKey = xAppKey;
    this.periodStart = periodStart;
    this.periodEnd = periodEnd;
    this.domain = domain;
    this.productGroupId = productGroupId;
    this.paymentProfileId = paymentProfileId;
    this.parentOrderId = parentOrderId;
    this.offset = offset;
    this.limit = limit;
    this.sort = sort;
    this.xShopperId = xShopperId;
  }
  toPathParams(): ListRequestDtoPathParams {
    return {};
  }
  toQueryParams(): ListRequestDtoQueryParams {
    return {
      periodStart: this.periodStart,
      periodEnd: this.periodEnd,
      domain: this.domain,
      productGroupId: this.productGroupId,
      paymentProfileId: this.paymentProfileId,
      parentOrderId: this.parentOrderId,
      offset: this.offset,
      limit: this.limit,
      sort: this.sort,
    };
  }
  toHeaders(): ListRequestDtoHeaders {
    return {
      'X-Shopper-Id': this.xShopperId,
      'X-App-Key': this.xAppKey,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
