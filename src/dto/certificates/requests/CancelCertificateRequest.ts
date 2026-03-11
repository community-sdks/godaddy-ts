import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CancelCertificateRequestParams {
  certificateId?: string;
}

export interface CancelCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface CancelCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface CancelCertificateRequestHeaders {
  [key: string]: unknown;
}

export class CancelCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: CancelCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): CancelCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): CancelCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): CancelCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
