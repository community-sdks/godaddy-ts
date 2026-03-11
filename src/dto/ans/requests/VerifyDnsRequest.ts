import { BaseRequestDto } from '../../baseRequestDto.js';

export interface VerifyDnsRequestParams {
  agentId?: string;
}

export interface VerifyDnsRequestPathParams {
  [key: string]: unknown;
}

export interface VerifyDnsRequestQueryParams {
  [key: string]: unknown;
}

export interface VerifyDnsRequestHeaders {
  [key: string]: unknown;
}

export class VerifyDnsRequest extends BaseRequestDto {
  agentId?: string;
  constructor({ agentId }: VerifyDnsRequestParams = {}) {
    super();
    this.agentId = agentId;
  }
  toPathParams(): VerifyDnsRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): VerifyDnsRequestQueryParams {
    return {};
  }
  toHeaders(): VerifyDnsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
