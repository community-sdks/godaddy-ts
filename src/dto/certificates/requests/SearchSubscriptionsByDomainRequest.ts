// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class SearchSubscriptionsByDomainRequest extends BaseRequestDto {
  constructor({ pageSize, page, domain, status, type, validation } = {}) {
    super();
    this.pageSize = pageSize;
    this.page = page;
    this.domain = domain;
    this.status = status;
    this.type = type;
    this.validation = validation;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      pageSize: this.pageSize,
      page: this.page,
      domain: this.domain,
      status: this.status,
      type: this.type,
      validation: this.validation,
    };
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
