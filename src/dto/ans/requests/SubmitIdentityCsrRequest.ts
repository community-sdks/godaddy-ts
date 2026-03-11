import { BaseRequestDto } from '../../baseRequestDto.js';

export type SubmitIdentityCsrRequestBodyType = Record<string, unknown>;

export interface SubmitIdentityCsrRequestParams {
  agentId?: string;
  body?: SubmitIdentityCsrRequestBodyType;
}

export interface SubmitIdentityCsrRequestPathParams {
  [key: string]: unknown;
}

export interface SubmitIdentityCsrRequestQueryParams {
  [key: string]: unknown;
}

export interface SubmitIdentityCsrRequestHeaders {
  [key: string]: unknown;
}

export class SubmitIdentityCsrRequest extends BaseRequestDto {
  agentId?: string;
  body?: SubmitIdentityCsrRequestBodyType;
  constructor({ agentId, body }: SubmitIdentityCsrRequestParams = {}) {
    super();
    this.agentId = agentId;
    this.body = body;
  }
  toPathParams(): SubmitIdentityCsrRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): SubmitIdentityCsrRequestQueryParams {
    return {};
  }
  toHeaders(): SubmitIdentityCsrRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
