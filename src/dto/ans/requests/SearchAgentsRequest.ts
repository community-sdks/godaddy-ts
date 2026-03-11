// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class SearchAgentsRequest extends BaseRequestDto {
  constructor({ agentDisplayName, version, agentHost, protocol, limit, offset } = {}) {
    super();
    this.agentDisplayName = agentDisplayName;
    this.version = version;
    this.agentHost = agentHost;
    this.protocol = protocol;
    this.limit = limit;
    this.offset = offset;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      agentDisplayName: this.agentDisplayName,
      version: this.version,
      agentHost: this.agentHost,
      protocol: this.protocol,
      limit: this.limit,
      offset: this.offset,
    };
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
