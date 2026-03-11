// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ListSubscriptionCertificatesRequest extends BaseRequestDto {
  constructor({ guid, pageSize, page, domain, status, type, validation } = {}) {
    super();
    this.guid = guid;
    this.pageSize = pageSize;
    this.page = page;
    this.domain = domain;
    this.status = status;
    this.type = type;
    this.validation = validation;
  }

  toPathParams() {
    return {
      guid: this.guid,
    };
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
