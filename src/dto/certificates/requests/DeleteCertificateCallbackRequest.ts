import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DeleteCertificateCallbackRequestParams {
  certificateId?: string;
}

export interface DeleteCertificateCallbackRequestPathParams {
  [key: string]: unknown;
}

export interface DeleteCertificateCallbackRequestQueryParams {
  [key: string]: unknown;
}

export interface DeleteCertificateCallbackRequestHeaders {
  [key: string]: unknown;
}

export class DeleteCertificateCallbackRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: DeleteCertificateCallbackRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): DeleteCertificateCallbackRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): DeleteCertificateCallbackRequestQueryParams {
    return {};
  }
  toHeaders(): DeleteCertificateCallbackRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
