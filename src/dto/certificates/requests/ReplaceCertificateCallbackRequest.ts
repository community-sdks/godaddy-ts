import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ReplaceCertificateCallbackRequestParams {
  certificateId?: string;
  callbackUrl?: string;
}

export interface ReplaceCertificateCallbackRequestPathParams {
  [key: string]: unknown;
}

export interface ReplaceCertificateCallbackRequestQueryParams {
  [key: string]: unknown;
}

export interface ReplaceCertificateCallbackRequestHeaders {
  [key: string]: unknown;
}

export class ReplaceCertificateCallbackRequest extends BaseRequestDto {
  certificateId?: string;
  callbackUrl?: string;
  constructor({ certificateId, callbackUrl }: ReplaceCertificateCallbackRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.callbackUrl = callbackUrl;
  }
  toPathParams(): ReplaceCertificateCallbackRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): ReplaceCertificateCallbackRequestQueryParams {
    return {
      callbackUrl: this.callbackUrl,
    };
  }
  toHeaders(): ReplaceCertificateCallbackRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
