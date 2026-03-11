import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCertificatesByEntitlementRequestParams {
  entitlementId?: string;
  latest?: boolean;
}

export interface GetCertificatesByEntitlementRequestPathParams {
  [key: string]: unknown;
}

export interface GetCertificatesByEntitlementRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCertificatesByEntitlementRequestHeaders {
  [key: string]: unknown;
}

export class GetCertificatesByEntitlementRequest extends BaseRequestDto {
  entitlementId?: string;
  latest?: boolean;
  constructor({ entitlementId, latest }: GetCertificatesByEntitlementRequestParams = {}) {
    super();
    this.entitlementId = entitlementId;
    this.latest = latest;
  }
  toPathParams(): GetCertificatesByEntitlementRequestPathParams {
    return {};
  }
  toQueryParams(): GetCertificatesByEntitlementRequestQueryParams {
    return {
      entitlementId: this.entitlementId,
      latest: this.latest,
    };
  }
  toHeaders(): GetCertificatesByEntitlementRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
