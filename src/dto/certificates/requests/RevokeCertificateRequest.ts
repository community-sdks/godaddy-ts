import { BaseRequestDto } from '../../baseRequestDto.js';

export type RevokeCertificateRequestCertificateRevokeType = Record<string, unknown>;

export interface RevokeCertificateRequestParams {
  certificateId?: string;
  certificateRevoke?: RevokeCertificateRequestCertificateRevokeType;
}

export interface RevokeCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface RevokeCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface RevokeCertificateRequestHeaders {
  [key: string]: unknown;
}

export class RevokeCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  certificateRevoke?: RevokeCertificateRequestCertificateRevokeType;
  constructor({ certificateId, certificateRevoke }: RevokeCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.certificateRevoke = certificateRevoke;
  }
  toPathParams(): RevokeCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): RevokeCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): RevokeCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.certificateRevoke;
  }
  isMultipart(): boolean {
    return false;
  }
}
