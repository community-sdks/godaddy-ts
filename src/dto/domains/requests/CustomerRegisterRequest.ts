import { BaseRequestDto } from '../../baseRequestDto.js';

export type CustomerRegisterRequestBodyType = Record<string, unknown>;

export interface CustomerRegisterRequestParams {
  customerId?: string;
  body?: CustomerRegisterRequestBodyType;
  xRequestId?: string;
}

export interface CustomerRegisterRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerRegisterRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerRegisterRequestHeaders {
  [key: string]: unknown;
}

export class CustomerRegisterRequest extends BaseRequestDto {
  customerId?: string;
  body?: CustomerRegisterRequestBodyType;
  xRequestId?: string;
  constructor({ customerId, body, xRequestId }: CustomerRegisterRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.body = body;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerRegisterRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): CustomerRegisterRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerRegisterRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
