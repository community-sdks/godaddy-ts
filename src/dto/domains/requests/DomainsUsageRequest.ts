import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainsUsageRequestIncludesItemEnum {
  DETAILS = "details",
}

export interface DomainsUsageRequestParams {
  yyyymm?: string;
  xRequestId?: string;
  includes?: Array<DomainsUsageRequestIncludesItemEnum>;
}

export interface DomainsUsageRequestPathParams {
  [key: string]: unknown;
}

export interface DomainsUsageRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainsUsageRequestHeaders {
  [key: string]: unknown;
}

export class DomainsUsageRequest extends BaseRequestDto {
  yyyymm?: string;
  xRequestId?: string;
  includes?: Array<DomainsUsageRequestIncludesItemEnum>;
  constructor({ yyyymm, xRequestId, includes }: DomainsUsageRequestParams = {}) {
    super();
    this.yyyymm = yyyymm;
    this.xRequestId = xRequestId;
    this.includes = includes;
  }
  toPathParams(): DomainsUsageRequestPathParams {
    return {
      yyyymm: this.yyyymm,
    };
  }
  toQueryParams(): DomainsUsageRequestQueryParams {
    return {
      includes: this.includes,
    };
  }
  toHeaders(): DomainsUsageRequestHeaders {
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
