import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCertificateEmailHistoryRequestParams {
  certificateId?: string;
}

export interface GetCertificateEmailHistoryRequestPathParams {
  [key: string]: unknown;
}

export interface GetCertificateEmailHistoryRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCertificateEmailHistoryRequestHeaders {
  [key: string]: unknown;
}

export class GetCertificateEmailHistoryRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: GetCertificateEmailHistoryRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): GetCertificateEmailHistoryRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): GetCertificateEmailHistoryRequestQueryParams {
    return {};
  }
  toHeaders(): GetCertificateEmailHistoryRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
