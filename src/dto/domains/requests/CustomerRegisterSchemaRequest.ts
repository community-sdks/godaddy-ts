import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CustomerRegisterSchemaRequestParams {
  customerId?: string;
  tld?: string;
  xRequestId?: string;
}

export interface CustomerRegisterSchemaRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerRegisterSchemaRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerRegisterSchemaRequestHeaders {
  [key: string]: unknown;
}

export class CustomerRegisterSchemaRequest extends BaseRequestDto {
  customerId?: string;
  tld?: string;
  xRequestId?: string;
  constructor({ customerId, tld, xRequestId }: CustomerRegisterSchemaRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.tld = tld;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerRegisterSchemaRequestPathParams {
    return {
      customerId: this.customerId,
      tld: this.tld,
    };
  }
  toQueryParams(): CustomerRegisterSchemaRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerRegisterSchemaRequestHeaders {
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
