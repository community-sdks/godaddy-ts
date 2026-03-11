import { BaseRequestDto } from '../../baseRequestDto.js';

export interface CustomerIdRequestParams {
  customerId?: string;
  xRequestId?: string;
}

export interface CustomerIdRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerIdRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerIdRequestHeaders {
  [key: string]: unknown;
}

export class CustomerIdRequest extends BaseRequestDto {
  customerId?: string;
  xRequestId?: string;
  constructor({ customerId, xRequestId }: CustomerIdRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.xRequestId = xRequestId;
  }
  toPathParams(): CustomerIdRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): CustomerIdRequestQueryParams {
    return {};
  }
  toHeaders(): CustomerIdRequestHeaders {
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
