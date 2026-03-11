import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCertificateRequestParams {
  certificateId?: string;
}

export interface GetCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface GetCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCertificateRequestHeaders {
  [key: string]: unknown;
}

export class GetCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: GetCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): GetCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): GetCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): GetCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
