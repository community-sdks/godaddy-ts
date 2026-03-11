import { BaseRequestDto } from '../../baseRequestDto.js';

export interface UpdateRequestDtoParams {
  shopperId?: unknown;
  shopper?: unknown;
}

export interface UpdateRequestDtoPathParams {
  [key: string]: unknown;
}

export interface UpdateRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface UpdateRequestDtoHeaders {
  [key: string]: unknown;
}

export class UpdateRequestDto extends BaseRequestDto {
  shopperId?: unknown;
  shopper?: unknown;
  constructor({ shopperId, shopper }: UpdateRequestDtoParams = {}) {
    super();
    this.shopperId = shopperId;
    this.shopper = shopper;
  }
  toPathParams(): UpdateRequestDtoPathParams {
    return {
      shopperId: this.shopperId,
    };
  }
  toQueryParams(): UpdateRequestDtoQueryParams {
    return {};
  }
  toHeaders(): UpdateRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return this.shopper;
  }
  isMultipart(): boolean {
    return false;
  }
}
