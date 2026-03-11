import { BaseRequestDto } from '../../baseRequestDto.js';

export interface VerifyAcmeRequestParams {
  agentId?: string;
}

export interface VerifyAcmeRequestPathParams {
  [key: string]: unknown;
}

export interface VerifyAcmeRequestQueryParams {
  [key: string]: unknown;
}

export interface VerifyAcmeRequestHeaders {
  [key: string]: unknown;
}

export class VerifyAcmeRequest extends BaseRequestDto {
  agentId?: string;
  constructor({ agentId }: VerifyAcmeRequestParams = {}) {
    super();
    this.agentId = agentId;
  }
  toPathParams(): VerifyAcmeRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): VerifyAcmeRequestQueryParams {
    return {};
  }
  toHeaders(): VerifyAcmeRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
