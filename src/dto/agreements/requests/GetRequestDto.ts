import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetRequestDtoParams {
  keys?: unknown;
  xPrivateLabelId?: unknown;
  xMarketId?: unknown;
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
  keys?: unknown;
  xPrivateLabelId?: unknown;
  xMarketId?: unknown;
  constructor({ keys, xPrivateLabelId, xMarketId }: GetRequestDtoParams = {}) {
    super();
    this.keys = keys;
    this.xPrivateLabelId = xPrivateLabelId;
    this.xMarketId = xMarketId;
  }
  toPathParams(): GetRequestDtoPathParams {
    return {};
  }
  toQueryParams(): GetRequestDtoQueryParams {
    return {
      keys: this.keys,
    };
  }
  toHeaders(): GetRequestDtoHeaders {
    return {
      'X-Private-Label-Id': this.xPrivateLabelId,
      'X-Market-Id': this.xMarketId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
