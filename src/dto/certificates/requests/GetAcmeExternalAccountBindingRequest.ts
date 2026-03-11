import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetAcmeExternalAccountBindingRequestParams {
  customerId?: unknown;
}

export interface GetAcmeExternalAccountBindingRequestPathParams {
  [key: string]: unknown;
}

export interface GetAcmeExternalAccountBindingRequestQueryParams {
  [key: string]: unknown;
}

export interface GetAcmeExternalAccountBindingRequestHeaders {
  [key: string]: unknown;
}

export class GetAcmeExternalAccountBindingRequest extends BaseRequestDto {
  customerId?: unknown;
  constructor({ customerId }: GetAcmeExternalAccountBindingRequestParams = {}) {
    super();
    this.customerId = customerId;
  }
  toPathParams(): GetAcmeExternalAccountBindingRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): GetAcmeExternalAccountBindingRequestQueryParams {
    return {};
  }
  toHeaders(): GetAcmeExternalAccountBindingRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
