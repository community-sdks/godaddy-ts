import { BaseRequestDto } from '../../baseRequestDto.js';

export type RegisterAgentRequestBodyType = Record<string, unknown>;

export interface RegisterAgentRequestParams {
  body?: RegisterAgentRequestBodyType;
}

export interface RegisterAgentRequestPathParams {
  [key: string]: unknown;
}

export interface RegisterAgentRequestQueryParams {
  [key: string]: unknown;
}

export interface RegisterAgentRequestHeaders {
  [key: string]: unknown;
}

export class RegisterAgentRequest extends BaseRequestDto {
  body?: RegisterAgentRequestBodyType;
  constructor({ body }: RegisterAgentRequestParams = {}) {
    super();
    this.body = body;
  }
  toPathParams(): RegisterAgentRequestPathParams {
    return {};
  }
  toQueryParams(): RegisterAgentRequestQueryParams {
    return {};
  }
  toHeaders(): RegisterAgentRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
