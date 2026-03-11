import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetRequestDtoParams {
  shopperId?: unknown;
  includes?: unknown;
}

export interface GetRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetRequestDto extends BaseRequestDto {
  shopperId?: unknown;
  includes?: unknown;
  constructor({ shopperId, includes }: GetRequestDtoParams = {}) {
    super();
    this.shopperId = shopperId;
    this.includes = includes;
  }
  toPathParams(): GetRequestDtoPathParams {
    return {
      shopperId: this.shopperId,
    };
  }
  toQueryParams(): GetRequestDtoQueryParams {
    return {
      includes: this.includes,
    };
  }
  toHeaders(): GetRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
