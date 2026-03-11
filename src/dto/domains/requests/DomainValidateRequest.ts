import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainValidateRequestBodyType = Record<string, unknown>;

export interface DomainValidateRequestParams {
  body?: DomainValidateRequestBodyType;
}

export interface DomainValidateRequestPathParams {
  [key: string]: unknown;
}

export interface DomainValidateRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainValidateRequestHeaders {
  [key: string]: unknown;
}

export class DomainValidateRequest extends BaseRequestDto {
  body?: DomainValidateRequestBodyType;
  constructor({ body }: DomainValidateRequestParams = {}) {
    super();
    this.body = body;
  }
  toPathParams(): DomainValidateRequestPathParams {
    return {};
  }
  toQueryParams(): DomainValidateRequestQueryParams {
    return {};
  }
  toHeaders(): DomainValidateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
