import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainTypeNameBodyRequestTypeEnum {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  MX = "MX",
  NS = "NS",
  SOA = "SOA",
  SRV = "SRV",
  TXT = "TXT",
}

export interface DomainTypeNameBodyRequestParams {
  domain?: string;
  type?: DomainTypeNameBodyRequestTypeEnum;
  name?: string;
  records?: Array<Record<string, unknown>>;
  xShopperId?: string;
}

export interface DomainTypeNameBodyRequestPathParams {
  [key: string]: unknown;
}

export interface DomainTypeNameBodyRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainTypeNameBodyRequestHeaders {
  [key: string]: unknown;
}

export class DomainTypeNameBodyRequest extends BaseRequestDto {
  domain?: string;
  type?: DomainTypeNameBodyRequestTypeEnum;
  name?: string;
  records?: Array<Record<string, unknown>>;
  xShopperId?: string;
  constructor({ domain, type, name, records, xShopperId }: DomainTypeNameBodyRequestParams = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.name = name;
    this.records = records;
    this.xShopperId = xShopperId;
  }
  toPathParams(): DomainTypeNameBodyRequestPathParams {
    return {
      domain: this.domain,
      type: this.type,
      name: this.name,
    };
  }
  toQueryParams(): DomainTypeNameBodyRequestQueryParams {
    return {};
  }
  toHeaders(): DomainTypeNameBodyRequestHeaders {
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
