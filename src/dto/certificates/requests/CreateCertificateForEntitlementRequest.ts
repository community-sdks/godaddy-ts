import { BaseRequestDto } from '../../baseRequestDto.js';

export type CreateCertificateForEntitlementRequestSubscriptionCertificateCreateType = Record<string, unknown>;

export interface CreateCertificateForEntitlementRequestParams {
  subscriptionCertificateCreate?: CreateCertificateForEntitlementRequestSubscriptionCertificateCreateType;
  xMarketId?: string;
}

export interface CreateCertificateForEntitlementRequestPathParams {
  [key: string]: unknown;
}

export interface CreateCertificateForEntitlementRequestQueryParams {
  [key: string]: unknown;
}

export interface CreateCertificateForEntitlementRequestHeaders {
  [key: string]: unknown;
}

export class CreateCertificateForEntitlementRequest extends BaseRequestDto {
  subscriptionCertificateCreate?: CreateCertificateForEntitlementRequestSubscriptionCertificateCreateType;
  xMarketId?: string;
  constructor({ subscriptionCertificateCreate, xMarketId }: CreateCertificateForEntitlementRequestParams = {}) {
    super();
    this.subscriptionCertificateCreate = subscriptionCertificateCreate;
    this.xMarketId = xMarketId;
  }
  toPathParams(): CreateCertificateForEntitlementRequestPathParams {
    return {};
  }
  toQueryParams(): CreateCertificateForEntitlementRequestQueryParams {
    return {};
  }
  toHeaders(): CreateCertificateForEntitlementRequestHeaders {
    return {
      'X-Market-Id': this.xMarketId,
    };
  }
  toBody(): unknown {
    return this.subscriptionCertificateCreate;
  }
  isMultipart(): boolean {
    return false;
  }
}
