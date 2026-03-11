import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCertificateCallbackRequestParams {
  certificateId?: string;
}

export interface GetCertificateCallbackRequestPathParams {
  [key: string]: unknown;
}

export interface GetCertificateCallbackRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCertificateCallbackRequestHeaders {
  [key: string]: unknown;
}

export class GetCertificateCallbackRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: GetCertificateCallbackRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): GetCertificateCallbackRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): GetCertificateCallbackRequestQueryParams {
    return {};
  }
  toHeaders(): GetCertificateCallbackRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
