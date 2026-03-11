import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DomainForwardingRequestParams {
  customerId?: string;
  fqdn?: string;
}

export interface DomainForwardingRequestPathParams {
  [key: string]: unknown;
}

export interface DomainForwardingRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainForwardingRequestHeaders {
  [key: string]: unknown;
}

export class DomainForwardingRequest extends BaseRequestDto {
  customerId?: string;
  fqdn?: string;
  constructor({ customerId, fqdn }: DomainForwardingRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.fqdn = fqdn;
  }
  toPathParams(): DomainForwardingRequestPathParams {
    return {
      customerId: this.customerId,
      fqdn: this.fqdn,
    };
  }
  toQueryParams(): DomainForwardingRequestQueryParams {
    return {};
  }
  toHeaders(): DomainForwardingRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
