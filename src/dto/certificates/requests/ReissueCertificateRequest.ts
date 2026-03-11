import { BaseRequestDto } from '../../baseRequestDto.js';

export type ReissueCertificateRequestReissueCreateType = Record<string, unknown>;

export interface ReissueCertificateRequestParams {
  certificateId?: string;
  reissueCreate?: ReissueCertificateRequestReissueCreateType;
}

export interface ReissueCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface ReissueCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface ReissueCertificateRequestHeaders {
  [key: string]: unknown;
}

export class ReissueCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  reissueCreate?: ReissueCertificateRequestReissueCreateType;
  constructor({ certificateId, reissueCreate }: ReissueCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.reissueCreate = reissueCreate;
  }
  toPathParams(): ReissueCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): ReissueCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): ReissueCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.reissueCreate;
  }
  isMultipart(): boolean {
    return false;
  }
}
