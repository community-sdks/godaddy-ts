import { BaseRequestDto } from '../../baseRequestDto.js';

export interface PlaceBidsRequestDtoParams {
  customerId?: string;
  requestBody?: Array<Record<string, unknown>>;
}

export interface PlaceBidsRequestDtoPathParams {
  [key: string]: unknown;
}

export interface PlaceBidsRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface PlaceBidsRequestDtoHeaders {
  [key: string]: unknown;
}

export class PlaceBidsRequestDto extends BaseRequestDto {
  customerId?: string;
  requestBody?: Array<Record<string, unknown>>;
  constructor({ customerId, requestBody }: PlaceBidsRequestDtoParams = {}) {
    super();
    this.customerId = customerId;
    this.requestBody = requestBody;
  }
  toPathParams(): PlaceBidsRequestDtoPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): PlaceBidsRequestDtoQueryParams {
    return {};
  }
  toHeaders(): PlaceBidsRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return this.requestBody;
  }
  isMultipart(): boolean {
    return false;
  }
}
