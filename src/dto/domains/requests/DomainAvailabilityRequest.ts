import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainAvailabilityRequestCheckTypeEnum {
  FAST = "FAST",
  FULL = "FULL",
  FAST_2 = "fast",
  FULL_3 = "full",
}

export interface DomainAvailabilityRequestParams {
  domain?: string;
  checkType?: DomainAvailabilityRequestCheckTypeEnum;
  forTransfer?: boolean;
}

export interface DomainAvailabilityRequestPathParams {
  [key: string]: unknown;
}

export interface DomainAvailabilityRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainAvailabilityRequestHeaders {
  [key: string]: unknown;
}

export class DomainAvailabilityRequest extends BaseRequestDto {
  domain?: string;
  checkType?: DomainAvailabilityRequestCheckTypeEnum;
  forTransfer?: boolean;
  constructor({ domain, checkType, forTransfer }: DomainAvailabilityRequestParams = {}) {
    super();
    this.domain = domain;
    this.checkType = checkType;
    this.forTransfer = forTransfer;
  }
  toPathParams(): DomainAvailabilityRequestPathParams {
    return {};
  }
  toQueryParams(): DomainAvailabilityRequestQueryParams {
    return {
      domain: this.domain,
      checkType: this.checkType,
      forTransfer: this.forTransfer,
    };
  }
  toHeaders(): DomainAvailabilityRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
