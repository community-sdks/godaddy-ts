import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetAgentRequestParams {
  agentId?: string;
}

export interface GetAgentRequestPathParams {
  [key: string]: unknown;
}

export interface GetAgentRequestQueryParams {
  [key: string]: unknown;
}

export interface GetAgentRequestHeaders {
  [key: string]: unknown;
}

export class GetAgentRequest extends BaseRequestDto {
  agentId?: string;
  constructor({ agentId }: GetAgentRequestParams = {}) {
    super();
    this.agentId = agentId;
  }
  toPathParams(): GetAgentRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): GetAgentRequestQueryParams {
    return {};
  }
  toHeaders(): GetAgentRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
