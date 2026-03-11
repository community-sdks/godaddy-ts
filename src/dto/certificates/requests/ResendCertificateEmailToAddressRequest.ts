import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ResendCertificateEmailToAddressRequestParams {
  certificateId?: string;
  emailId?: string;
  emailAddress?: string;
}

export interface ResendCertificateEmailToAddressRequestPathParams {
  [key: string]: unknown;
}

export interface ResendCertificateEmailToAddressRequestQueryParams {
  [key: string]: unknown;
}

export interface ResendCertificateEmailToAddressRequestHeaders {
  [key: string]: unknown;
}

export class ResendCertificateEmailToAddressRequest extends BaseRequestDto {
  certificateId?: string;
  emailId?: string;
  emailAddress?: string;
  constructor({ certificateId, emailId, emailAddress }: ResendCertificateEmailToAddressRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.emailId = emailId;
    this.emailAddress = emailAddress;
  }
  toPathParams(): ResendCertificateEmailToAddressRequestPathParams {
    return {
      certificateId: this.certificateId,
      emailId: this.emailId,
      emailAddress: this.emailAddress,
    };
  }
  toQueryParams(): ResendCertificateEmailToAddressRequestQueryParams {
    return {};
  }
  toHeaders(): ResendCertificateEmailToAddressRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
