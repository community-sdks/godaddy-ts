import { BaseRequestDto } from '../../baseRequestDto.js';

export type ResolveAgentRequestBodyType = Record<string, unknown>;

export interface ResolveAgentRequestParams {
  body?: ResolveAgentRequestBodyType;
}

export interface ResolveAgentRequestPathParams {
  [key: string]: unknown;
}

export interface ResolveAgentRequestQueryParams {
  [key: string]: unknown;
}

export interface ResolveAgentRequestHeaders {
  [key: string]: unknown;
}

export class ResolveAgentRequest extends BaseRequestDto {
  body?: ResolveAgentRequestBodyType;
  constructor({ body }: ResolveAgentRequestParams = {}) {
    super();
    this.body = body;
  }
  toPathParams(): ResolveAgentRequestPathParams {
    return {};
  }
  toQueryParams(): ResolveAgentRequestQueryParams {
    return {};
  }
  toHeaders(): ResolveAgentRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
