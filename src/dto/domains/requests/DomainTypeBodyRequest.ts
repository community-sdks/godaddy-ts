import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainTypeBodyRequestTypeEnum {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  MX = "MX",
  NS = "NS",
  SOA = "SOA",
  SRV = "SRV",
  TXT = "TXT",
}

export interface DomainTypeBodyRequestParams {
  domain?: string;
  type?: DomainTypeBodyRequestTypeEnum;
  records?: Array<Record<string, unknown>>;
  xShopperId?: string;
}

export interface DomainTypeBodyRequestPathParams {
  [key: string]: unknown;
}

export interface DomainTypeBodyRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainTypeBodyRequestHeaders {
  [key: string]: unknown;
}

export class DomainTypeBodyRequest extends BaseRequestDto {
  domain?: string;
  type?: DomainTypeBodyRequestTypeEnum;
  records?: Array<Record<string, unknown>>;
  xShopperId?: string;
  constructor({ domain, type, records, xShopperId }: DomainTypeBodyRequestParams = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.records = records;
    this.xShopperId = xShopperId;
  }
  toPathParams(): DomainTypeBodyRequestPathParams {
    return {
      domain: this.domain,
      type: this.type,
    };
  }
  toQueryParams(): DomainTypeBodyRequestQueryParams {
    return {};
  }
  toHeaders(): DomainTypeBodyRequestHeaders {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return this.records;
  }
  isMultipart(): boolean {
    return false;
  }
}
