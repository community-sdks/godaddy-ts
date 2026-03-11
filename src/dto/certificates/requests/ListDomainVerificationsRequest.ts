import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ListDomainVerificationsRequestParams {
  customerId?: unknown;
  certificateId?: unknown;
}

export interface ListDomainVerificationsRequestPathParams {
  [key: string]: unknown;
}

export interface ListDomainVerificationsRequestQueryParams {
  [key: string]: unknown;
}

export interface ListDomainVerificationsRequestHeaders {
  [key: string]: unknown;
}

export class ListDomainVerificationsRequest extends BaseRequestDto {
  customerId?: unknown;
  certificateId?: unknown;
  constructor({ customerId, certificateId }: ListDomainVerificationsRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.certificateId = certificateId;
  }
  toPathParams(): ListDomainVerificationsRequestPathParams {
    return {
      customerId: this.customerId,
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): ListDomainVerificationsRequestQueryParams {
    return {};
  }
  toHeaders(): ListDomainVerificationsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
