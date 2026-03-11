import { BaseRequestDto } from '../../baseRequestDto.js';

export enum SearchAgentsRequestProtocolEnum {
  MCP = "MCP",
  A2A = "A2A",
  HTTP_API = "HTTP-API",
}

export interface SearchAgentsRequestParams {
  agentDisplayName?: string;
  version?: string;
  agentHost?: string;
  protocol?: SearchAgentsRequestProtocolEnum;
  limit?: number;
  offset?: number;
}

export interface SearchAgentsRequestPathParams {
  [key: string]: unknown;
}

export interface SearchAgentsRequestQueryParams {
  [key: string]: unknown;
}

export interface SearchAgentsRequestHeaders {
  [key: string]: unknown;
}

export class SearchAgentsRequest extends BaseRequestDto {
  agentDisplayName?: string;
  version?: string;
  agentHost?: string;
  protocol?: SearchAgentsRequestProtocolEnum;
  limit?: number;
  offset?: number;
  constructor({ agentDisplayName, version, agentHost, protocol, limit, offset }: SearchAgentsRequestParams = {}) {
    super();
    this.agentDisplayName = agentDisplayName;
    this.version = version;
    this.agentHost = agentHost;
    this.protocol = protocol;
    this.limit = limit;
    this.offset = offset;
  }
  toPathParams(): SearchAgentsRequestPathParams {
    return {};
  }
  toQueryParams(): SearchAgentsRequestQueryParams {
    return {
      agentDisplayName: this.agentDisplayName,
      version: this.version,
      agentHost: this.agentHost,
      protocol: this.protocol,
      limit: this.limit,
      offset: this.offset,
    };
  }
  toHeaders(): SearchAgentsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
