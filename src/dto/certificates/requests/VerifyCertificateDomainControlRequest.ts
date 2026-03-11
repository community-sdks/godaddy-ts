import { BaseRequestDto } from '../../baseRequestDto.js';

export interface VerifyCertificateDomainControlRequestParams {
  certificateId?: string;
}

export interface VerifyCertificateDomainControlRequestPathParams {
  [key: string]: unknown;
}

export interface VerifyCertificateDomainControlRequestQueryParams {
  [key: string]: unknown;
}

export interface VerifyCertificateDomainControlRequestHeaders {
  [key: string]: unknown;
}

export class VerifyCertificateDomainControlRequest extends BaseRequestDto {
  certificateId?: string;
  constructor({ certificateId }: VerifyCertificateDomainControlRequestParams = {}) {
    super();
    this.certificateId = certificateId;
  }
  toPathParams(): VerifyCertificateDomainControlRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): VerifyCertificateDomainControlRequestQueryParams {
    return {};
  }
  toHeaders(): VerifyCertificateDomainControlRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
