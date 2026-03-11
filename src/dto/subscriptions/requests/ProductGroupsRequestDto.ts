import { BaseRequestDto } from '../../baseRequestDto.js';

export interface ProductGroupsRequestDtoParams {
  xAppKey?: string;
  xShopperId?: string;
}

export interface ProductGroupsRequestDtoPathParams {
  [key: string]: unknown;
}

export interface ProductGroupsRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface ProductGroupsRequestDtoHeaders {
  [key: string]: unknown;
}

export class ProductGroupsRequestDto extends BaseRequestDto {
  xAppKey?: string;
  xShopperId?: string;
  constructor({ xAppKey, xShopperId }: ProductGroupsRequestDtoParams = {}) {
    super();
    this.xAppKey = xAppKey;
    this.xShopperId = xShopperId;
  }
  toPathParams(): ProductGroupsRequestDtoPathParams {
    return {};
  }
  toQueryParams(): ProductGroupsRequestDtoQueryParams {
    return {};
  }
  toHeaders(): ProductGroupsRequestDtoHeaders {
    return {
      'X-App-Key': this.xAppKey,
      'X-Shopper-Id': this.xShopperId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
