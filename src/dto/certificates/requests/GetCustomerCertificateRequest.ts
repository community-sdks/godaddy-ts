import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCustomerCertificateRequestParams {
  customerId?: unknown;
  certificateId?: unknown;
}

export interface GetCustomerCertificateRequestPathParams {
  [key: string]: unknown;
}

export interface GetCustomerCertificateRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCustomerCertificateRequestHeaders {
  [key: string]: unknown;
}

export class GetCustomerCertificateRequest extends BaseRequestDto {
  customerId?: unknown;
  certificateId?: unknown;
  constructor({ customerId, certificateId }: GetCustomerCertificateRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.certificateId = certificateId;
  }
  toPathParams(): GetCustomerCertificateRequestPathParams {
    return {
      customerId: this.customerId,
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): GetCustomerCertificateRequestQueryParams {
    return {};
  }
  toHeaders(): GetCustomerCertificateRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
