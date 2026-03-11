import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ListCertificateActionsRequestParams {
  certificateId?: string;
}

export interface ListCertificateActionsRequestPathParams {
  [key: string]: unknown;
}

export interface ListCertificateActionsRequestQueryParams {
  [key: string]: unknown;
}

export interface ListCertificateActionsRequestHeaders {
  [key: string]: unknown;
}

export class ListCertificateActionsRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: ListCertificateActionsRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): ListCertificateActionsRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): ListCertificateActionsRequestQueryParams {
    return {};
  }
  toHeaders(): ListCertificateActionsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
