import { BaseRequestDto } from '../../baseRequestDto.js';

export type CreateCertificateRequestCertificateCreateType = Record<string, unknown>;

export interface CreateCertificateRequestParams {
  certificateCreate?: CreateCertificateRequestCertificateCreateType;
  xMarketId?: string;
}

export interface CreateCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface CreateCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface CreateCertificateRequestHeaders {
  [key: string]: unknown;
}

export class CreateCertificateRequest extends BaseRequestDto {
  certificateCreate?: CreateCertificateRequestCertificateCreateType;
  xMarketId?: string;
  constructor({ certificateCreate, xMarketId }: CreateCertificateRequestParams = {}) {
    super();
    this.certificateCreate = certificateCreate;
    this.xMarketId = xMarketId;
  }
  toPathParams(): CreateCertificateRequestPathParams {
    return {};
  }
  toQueryParams(): CreateCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): CreateCertificateRequestHeaders {
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
