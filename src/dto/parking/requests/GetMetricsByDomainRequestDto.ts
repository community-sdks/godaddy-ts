import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetMetricsByDomainRequestDtoParams {
  customerId?: string;
  startDate?: string;
  endDate?: string;
  domains?: string;
  domainLike?: string;
  portfolioId?: string;
  limit?: number;
  offset?: number;
  xRequestId?: string;
}

export interface GetMetricsByDomainRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetMetricsByDomainRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetMetricsByDomainRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetMetricsByDomainRequestDto extends BaseRequestDto {
  customerId?: string;
  startDate?: string;
  endDate?: string;
  domains?: string;
  domainLike?: string;
  portfolioId?: string;
  limit?: number;
  offset?: number;
  xRequestId?: string;
  constructor({ customerId, startDate, endDate, domains, domainLike, portfolioId, limit, offset, xRequestId }: GetMetricsByDomainRequestDtoParams = {}) {
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
  toPathParams(): GetMetricsByDomainRequestDtoPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): GetMetricsByDomainRequestDtoQueryParams {
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
  toHeaders(): GetMetricsByDomainRequestDtoHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
