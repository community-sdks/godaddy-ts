import { BaseRequestDto } from '../../baseRequestDto.js';

export enum CustomerDomainIncludesRequestIncludesItemEnum {
  ACTIONS = "actions",
  CONTACTS = "contacts",
  DNSSECRECORDS = "dnssecRecords",
  REGISTRYSTATUSCODES = "registryStatusCodes",
}

export interface CustomerDomainIncludesRequestParams {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  includes?: Array<CustomerDomainIncludesRequestIncludesItemEnum>;
}

export interface CustomerDomainIncludesRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainIncludesRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainIncludesRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainIncludesRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  includes?: Array<CustomerDomainIncludesRequestIncludesItemEnum>;
  constructor({ customerId, domain, xRequestId, includes }: CustomerDomainIncludesRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.includes = includes;
  }
  toPathParams(): CustomerDomainIncludesRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainIncludesRequestQueryParams {
    return {
      includes: this.includes,
    };
  }
  toHeaders(): CustomerDomainIncludesRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
