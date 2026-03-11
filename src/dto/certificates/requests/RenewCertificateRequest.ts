import { BaseRequestDto } from '../../baseRequestDto.js';

export type RenewCertificateRequestRenewCreateType = Record<string, unknown>;

export interface RenewCertificateRequestParams {
  certificateId?: string;
  renewCreate?: RenewCertificateRequestRenewCreateType;
}

export interface RenewCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface RenewCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface RenewCertificateRequestHeaders {
  [key: string]: unknown;
}

export class RenewCertificateRequest extends BaseRequestDto {
  certificateId?: string;
  renewCreate?: RenewCertificateRequestRenewCreateType;
  constructor({ certificateId, renewCreate }: RenewCertificateRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.renewCreate = renewCreate;
  }
  toPathParams(): RenewCertificateRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): RenewCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): RenewCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.renewCreate;
  }
  isMultipart(): boolean {
    return false;
  }
}
