import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DomainSchemaRequestParams {
  tld?: string;
}

export interface DomainSchemaRequestPathParams {
  [key: string]: unknown;
}

export interface DomainSchemaRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainSchemaRequestHeaders {
  [key: string]: unknown;
}

export class DomainSchemaRequest extends BaseRequestDto {
  tld?: string;
  constructor({ tld }: DomainSchemaRequestParams = {}) {
    super();
    this.tld = tld;
  }
  toPathParams(): DomainSchemaRequestPathParams {
    return {
      tld: this.tld,
    };
  }
  toQueryParams(): DomainSchemaRequestQueryParams {
    return {};
  }
  toHeaders(): DomainSchemaRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
