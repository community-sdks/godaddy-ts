// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetMetricsByDomainRequestDto extends BaseRequestDto {
  constructor({ customerId, startDate, endDate, domains, domainLike, portfolioId, limit, offset, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.domains = domains;
    this.domainLike = domainLike;
    this.portfolioId = portfolioId;
    this.limit = limit;
    this.offset = offset;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {
      startDate: this.startDate,
      endDate: this.endDate,
      domains: this.domains,
      domainLike: this.domainLike,
      portfolioId: this.portfolioId,
      limit: this.limit,
      offset: this.offset,
    };
  }

  toHeaders() {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
