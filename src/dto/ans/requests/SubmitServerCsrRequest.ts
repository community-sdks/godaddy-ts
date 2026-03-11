import { BaseRequestDto } from '../../baseRequestDto.js';

export type SubmitServerCsrRequestBodyType = Record<string, unknown>;

export interface SubmitServerCsrRequestParams {
  agentId?: string;
  body?: SubmitServerCsrRequestBodyType;
}

export interface SubmitServerCsrRequestPathParams {
  [key: string]: unknown;
}

export interface SubmitServerCsrRequestQueryParams {
  [key: string]: unknown;
}

export interface SubmitServerCsrRequestHeaders {
  [key: string]: unknown;
}

export class SubmitServerCsrRequest extends BaseRequestDto {
  agentId?: string;
  body?: SubmitServerCsrRequestBodyType;
  constructor({ agentId, body }: SubmitServerCsrRequestParams = {}) {
    super();
    this.agentId = agentId;
    this.body = body;
  }
  toPathParams(): SubmitServerCsrRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): SubmitServerCsrRequestQueryParams {
    return {};
  }
  toHeaders(): SubmitServerCsrRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
