import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DomainPathRequestParams {
  domain?: string;
}

export interface DomainPathRequestPathParams {
  [key: string]: unknown;
}

export interface DomainPathRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainPathRequestHeaders {
  [key: string]: unknown;
}

export class DomainPathRequest extends BaseRequestDto {
  domain?: string;
  constructor({ domain }: DomainPathRequestParams = {}) {
    super();
    this.domain = domain;
  }
  toPathParams(): DomainPathRequestPathParams {
    return {
      domain: this.domain,
    };
  }
  toQueryParams(): DomainPathRequestQueryParams {
    return {};
  }
  toHeaders(): DomainPathRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
