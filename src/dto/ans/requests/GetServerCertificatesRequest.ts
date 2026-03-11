import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetServerCertificatesRequestParams {
  agentId?: string;
}

export interface GetServerCertificatesRequestPathParams {
  [key: string]: unknown;
}

export interface GetServerCertificatesRequestQueryParams {
  [key: string]: unknown;
}

export interface GetServerCertificatesRequestHeaders {
  [key: string]: unknown;
}

export class GetServerCertificatesRequest extends BaseRequestDto {
  agentId?: string;
  constructor({ agentId }: GetServerCertificatesRequestParams = {}) {
    super();
    this.agentId = agentId;
  }
  toPathParams(): GetServerCertificatesRequestPathParams {
    return {
      agentId: this.agentId,
    };
  }
  toQueryParams(): GetServerCertificatesRequestQueryParams {
    return {};
  }
  toHeaders(): GetServerCertificatesRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
