import { BaseRequestDto } from '../../baseRequestDto.js';

export type CustomerRegisterValidateRequestBodyType = Record<string, unknown>;

export interface CustomerRegisterValidateRequestParams {
  customerId?: string;
  body?: CustomerRegisterValidateRequestBodyType;
  xRequestId?: string;
}

export interface CustomerRegisterValidateRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerRegisterValidateRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerRegisterValidateRequestHeaders {
  [key: string]: unknown;
}

export class CustomerRegisterValidateRequest extends BaseRequestDto {
  customerId?: string;
  body?: CustomerRegisterValidateRequestBodyType;
  xRequestId?: string;
  constructor({ customerId, body, xRequestId }: CustomerRegisterValidateRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.body = body;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerRegisterValidateRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): CustomerRegisterValidateRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerRegisterValidateRequestHeaders {
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
