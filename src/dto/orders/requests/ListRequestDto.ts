// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ListRequestDto extends BaseRequestDto {
  constructor({ xAppKey, periodStart, periodEnd, domain, productGroupId, paymentProfileId, parentOrderId, offset, limit, sort, xShopperId } = {}) {
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

  toPathParams() {
    return {};
  }

  toQueryParams() {
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

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
      'X-App-Key': this.xAppKey,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
