import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetDomainVerificationDetailsRequestParams {
  customerId?: unknown;
  certificateId?: unknown;
  domain?: unknown;
}

export interface GetDomainVerificationDetailsRequestPathParams {
  [key: string]: unknown;
}

export interface GetDomainVerificationDetailsRequestQueryParams {
  [key: string]: unknown;
}

export interface GetDomainVerificationDetailsRequestHeaders {
  [key: string]: unknown;
}

export class GetDomainVerificationDetailsRequest extends BaseRequestDto {
  customerId?: unknown;
  certificateId?: unknown;
  domain?: unknown;
  constructor({ customerId, certificateId, domain }: GetDomainVerificationDetailsRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.certificateId = certificateId;
    this.domain = domain;
  }
  toPathParams(): GetDomainVerificationDetailsRequestPathParams {
    return {
      customerId: this.customerId,
      certificateId: this.certificateId,
      domain: this.domain,
    };
  }
  toQueryParams(): GetDomainVerificationDetailsRequestQueryParams {
    return {};
  }
  toHeaders(): GetDomainVerificationDetailsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
