import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DeleteListingsRequestParams {
  domains?: Array<string>;
}

export interface DeleteListingsRequestPathParams {
  [key: string]: unknown;
}

export interface DeleteListingsRequestQueryParams {
  [key: string]: unknown;
}

export interface DeleteListingsRequestHeaders {
  [key: string]: unknown;
}

export class DeleteListingsRequest extends BaseRequestDto {
  domains?: Array<string>;
  constructor({ domains }: DeleteListingsRequestParams = {}) {
    super();
    this.domains = domains;
  }
  toPathParams(): DeleteListingsRequestPathParams {
    return {};
  }
  toQueryParams(): DeleteListingsRequestQueryParams {
    return {
      domains: this.domains,
    };
  }
  toHeaders(): DeleteListingsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
