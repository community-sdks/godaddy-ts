import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetCsrStatusRequestParams {
  agentId?: string;
  csrId?: string;
}

export interface GetCsrStatusRequestPathParams {
  [key: string]: unknown;
}

export interface GetCsrStatusRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCsrStatusRequestHeaders {
  [key: string]: unknown;
}

export class GetCsrStatusRequest extends BaseRequestDto {
  agentId?: string;
  csrId?: string;
  constructor({ agentId, csrId }: GetCsrStatusRequestParams = {}) {
    super();
    this.agentId = agentId;
    this.csrId = csrId;
  }
  toPathParams(): GetCsrStatusRequestPathParams {
    return {
      agentId: this.agentId,
      csrId: this.csrId,
    };
  }
  toQueryParams(): GetCsrStatusRequestQueryParams {
    return {};
  }
  toHeaders(): GetCsrStatusRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
