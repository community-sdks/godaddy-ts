import { BaseRequestDto } from '../../baseRequestDto.js';

export interface SearchSubscriptionsByDomainRequestParams {
  pageSize?: unknown;
  page?: unknown;
  domain?: unknown;
  status?: unknown;
  type?: unknown;
  validation?: unknown;
}

export interface SearchSubscriptionsByDomainRequestPathParams {
  [key: string]: unknown;
}

export interface SearchSubscriptionsByDomainRequestQueryParams {
  [key: string]: unknown;
}

export interface SearchSubscriptionsByDomainRequestHeaders {
  [key: string]: unknown;
}

export class SearchSubscriptionsByDomainRequest extends BaseRequestDto {
  pageSize?: unknown;
  page?: unknown;
  domain?: unknown;
  status?: unknown;
  type?: unknown;
  validation?: unknown;
  constructor({ pageSize, page, domain, status, type, validation }: SearchSubscriptionsByDomainRequestParams = {}) {
    super();
    this.pageSize = pageSize;
    this.page = page;
    this.domain = domain;
    this.status = status;
    this.type = type;
    this.validation = validation;
  }
  toPathParams(): SearchSubscriptionsByDomainRequestPathParams {
    return {};
  }
  toQueryParams(): SearchSubscriptionsByDomainRequestQueryParams {
    return {
      pageSize: this.pageSize,
      page: this.page,
      domain: this.domain,
      status: this.status,
      type: this.type,
      validation: this.validation,
    };
  }
  toHeaders(): SearchSubscriptionsByDomainRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
