import { BaseRequestDto } from '../../baseRequestDto.js';

export type ValidateCertificateRequestCertificateCreateType = Record<string, unknown>;

export interface ValidateCertificateRequestParams {
  certificateCreate?: ValidateCertificateRequestCertificateCreateType;
  xMarketId?: string;
}

export interface ValidateCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface ValidateCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface ValidateCertificateRequestHeaders {
  [key: string]: unknown;
}

export class ValidateCertificateRequest extends BaseRequestDto {
  certificateCreate?: ValidateCertificateRequestCertificateCreateType;
  xMarketId?: string;
  constructor({ certificateCreate, xMarketId }: ValidateCertificateRequestParams = {}) {
    super();
    this.certificateCreate = certificateCreate;
    this.xMarketId = xMarketId;
  }
  toPathParams(): ValidateCertificateRequestPathParams {
    return {};
  }
  toQueryParams(): ValidateCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): ValidateCertificateRequestHeaders {
    return {
      'X-Market-Id': this.xMarketId,
    };
  }
  toBody(): unknown {
    return this.certificateCreate;
  }
  isMultipart(): boolean {
    return false;
  }
}
