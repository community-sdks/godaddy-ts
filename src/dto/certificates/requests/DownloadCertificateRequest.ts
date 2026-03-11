import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DownloadCertificateRequestParams {
  certificateId?: string;
}

export interface DownloadCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface DownloadCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface DownloadCertificateRequestHeaders {
  [key: string]: unknown;
}

export class DownloadCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: DownloadCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): DownloadCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): DownloadCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): DownloadCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
