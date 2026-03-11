import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CustomerDomainRegistrarRequestParams {
  customerId?: string;
  domain?: string;
  registrar?: string;
  xRequestId?: string;
}

export interface CustomerDomainRegistrarRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainRegistrarRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainRegistrarRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainRegistrarRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  registrar?: string;
  xRequestId?: string;
  constructor({ customerId, domain, registrar, xRequestId }: CustomerDomainRegistrarRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.registrar = registrar;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerDomainRegistrarRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainRegistrarRequestQueryParams {
    return {
      registrar: this.registrar,
    };
  }
  toHeaders(): CustomerDomainRegistrarRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
