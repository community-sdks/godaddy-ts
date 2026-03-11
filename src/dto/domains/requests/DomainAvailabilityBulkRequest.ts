import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainAvailabilityBulkRequestCheckTypeEnum {
  FAST = "FAST",
  FULL = "FULL",
  FAST_2 = "fast",
  FULL_3 = "full",
}

export interface DomainAvailabilityBulkRequestParams {
  domains?: Array<string>;
  checkType?: DomainAvailabilityBulkRequestCheckTypeEnum;
}

export interface DomainAvailabilityBulkRequestPathParams {
  [key: string]: unknown;
}

export interface DomainAvailabilityBulkRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainAvailabilityBulkRequestHeaders {
  [key: string]: unknown;
}

export class DomainAvailabilityBulkRequest extends BaseRequestDto {
  domains?: Array<string>;
  checkType?: DomainAvailabilityBulkRequestCheckTypeEnum;
  constructor({ domains, checkType }: DomainAvailabilityBulkRequestParams = {}) {
    super();
    this.domains = domains;
    this.checkType = checkType;
  }
  toPathParams(): DomainAvailabilityBulkRequestPathParams {
    return {};
  }
  toQueryParams(): DomainAvailabilityBulkRequestQueryParams {
    return {
      checkType: this.checkType,
    };
  }
  toHeaders(): DomainAvailabilityBulkRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.domains;
  }
  isMultipart(): boolean {
    return false;
  }
}
