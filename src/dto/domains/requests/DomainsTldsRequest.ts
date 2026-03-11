import { BaseRequestDto } from '../../baseRequestDto.js';

export type DomainsTldsRequestParams = Record<string, never>;

export interface DomainsTldsRequestPathParams {
  [key: string]: unknown;
}

export interface DomainsTldsRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainsTldsRequestHeaders {
  [key: string]: unknown;
}

export class DomainsTldsRequest extends BaseRequestDto {
  constructor() {
    super();
  }
  toPathParams(): DomainsTldsRequestPathParams {
    return {};
  }
  toQueryParams(): DomainsTldsRequestQueryParams {
    return {};
  }
  toHeaders(): DomainsTldsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
