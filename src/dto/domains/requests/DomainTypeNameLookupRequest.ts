import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainTypeNameLookupRequestTypeEnum {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  MX = "MX",
  SRV = "SRV",
  TXT = "TXT",
}

export interface DomainTypeNameLookupRequestParams {
  domain?: string;
  type?: DomainTypeNameLookupRequestTypeEnum;
  name?: string;
  xShopperId?: string;
  offset?: unknown;
  limit?: unknown;
}

export interface DomainTypeNameLookupRequestPathParams {
  [key: string]: unknown;
}

export interface DomainTypeNameLookupRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainTypeNameLookupRequestHeaders {
  [key: string]: unknown;
}

export class DomainTypeNameLookupRequest extends BaseRequestDto {
  domain?: string;
  type?: DomainTypeNameLookupRequestTypeEnum;
  name?: string;
  xShopperId?: string;
  offset?: unknown;
  limit?: unknown;
  constructor({ domain, type, name, xShopperId, offset, limit }: DomainTypeNameLookupRequestParams = {}) {
    super();
    this.domain = domain;
    this.type = type;
    this.name = name;
    this.xShopperId = xShopperId;
    this.offset = offset;
    this.limit = limit;
  }
  toPathParams(): DomainTypeNameLookupRequestPathParams {
    return {
      domain: this.domain,
      type: this.type,
      name: this.name,
    };
  }
  toQueryParams(): DomainTypeNameLookupRequestQueryParams {
    return {
      offset: this.offset,
      limit: this.limit,
    };
  }
  toHeaders(): DomainTypeNameLookupRequestHeaders {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
