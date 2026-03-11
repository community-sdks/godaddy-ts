import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DownloadCertificateByEntitlementRequestParams {
  entitlementId?: string;
}

export interface DownloadCertificateByEntitlementRequestPathParams {
  [key: string]: unknown;
}

export interface DownloadCertificateByEntitlementRequestQueryParams {
  [key: string]: unknown;
}

export interface DownloadCertificateByEntitlementRequestHeaders {
  [key: string]: unknown;
}

export class DownloadCertificateByEntitlementRequest extends BaseRequestDto {
  entitlementId?: string;
  constructor({ entitlementId }: DownloadCertificateByEntitlementRequestParams = {}) {
    super();
    this.entitlementId = entitlementId;
  }
  toPathParams(): DownloadCertificateByEntitlementRequestPathParams {
    return {};
  }
  toQueryParams(): DownloadCertificateByEntitlementRequestQueryParams {
    return {
      entitlementId: this.entitlementId,
    };
  }
  toHeaders(): DownloadCertificateByEntitlementRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
