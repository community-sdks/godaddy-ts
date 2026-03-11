import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetIdentityCertificatesRequestParams {
  agentId?: string;
}

export interface GetIdentityCertificatesRequestPathParams {
  [key: string]: unknown;
}

export interface GetIdentityCertificatesRequestQueryParams {
  [key: string]: unknown;
}

export interface GetIdentityCertificatesRequestHeaders {
  [key: string]: unknown;
}

export class GetIdentityCertificatesRequest extends BaseRequestDto {
  agentId?: string;
  constructor({ agentId }: GetIdentityCertificatesRequestParams = {}) {
    super();
    this.agentId = agentId;
  }
  toPathParams(): GetIdentityCertificatesRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): GetIdentityCertificatesRequestQueryParams {
    return {};
  }
  toHeaders(): GetIdentityCertificatesRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
