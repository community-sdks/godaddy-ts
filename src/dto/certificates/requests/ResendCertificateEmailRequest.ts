import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ResendCertificateEmailRequestParams {
  certificateId?: string;
  emailId?: string;
}

export interface ResendCertificateEmailRequestPathParams {
  [key: string]: unknown;
}

export interface ResendCertificateEmailRequestQueryParams {
  [key: string]: unknown;
}

export interface ResendCertificateEmailRequestHeaders {
  [key: string]: unknown;
}

export class ResendCertificateEmailRequest extends BaseRequestDto {
  certificateId?: string;
  emailId?: string;
  constructor({ certificateId, emailId }: ResendCertificateEmailRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.emailId = emailId;
  }
  toPathParams(): ResendCertificateEmailRequestPathParams {
    return {
      certificateId: this.certificateId,
      emailId: this.emailId,
    };
  }
  toQueryParams(): ResendCertificateEmailRequestQueryParams {
    return {};
  }
  toHeaders(): ResendCertificateEmailRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
