import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ListSubscriptionCertificatesRequestParams {
  guid?: unknown;
  pageSize?: unknown;
  page?: unknown;
  domain?: unknown;
  status?: unknown;
  type?: unknown;
  validation?: unknown;
}

export interface ListSubscriptionCertificatesRequestPathParams {
  [key: string]: unknown;
}

export interface ListSubscriptionCertificatesRequestQueryParams {
  [key: string]: unknown;
}

export interface ListSubscriptionCertificatesRequestHeaders {
  [key: string]: unknown;
}

export class ListSubscriptionCertificatesRequest extends BaseRequestDto {
  guid?: unknown;
  pageSize?: unknown;
  page?: unknown;
  domain?: unknown;
  status?: unknown;
  type?: unknown;
  validation?: unknown;
  constructor({ guid, pageSize, page, domain, status, type, validation }: ListSubscriptionCertificatesRequestParams = {}) {
    super();
    this.guid = guid;
    this.pageSize = pageSize;
    this.page = page;
    this.domain = domain;
    this.status = status;
    this.type = type;
    this.validation = validation;
  }
  toPathParams(): ListSubscriptionCertificatesRequestPathParams {
    return {
      guid: this.guid,
    };
  }
  toQueryParams(): ListSubscriptionCertificatesRequestQueryParams {
    return {
      pageSize: this.pageSize,
      page: this.page,
      domain: this.domain,
      status: this.status,
      type: this.type,
      validation: this.validation,
    };
  }
  toHeaders(): ListSubscriptionCertificatesRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
