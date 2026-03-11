// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetIdentityCertificatesRequest extends BaseRequestDto {
  constructor({ agentId } = {}) {
    super();
    this.agentId = agentId;
  }

  toPathParams() {
    return {
      agentId: this.agentId,
    };
  }

  toQueryParams() {
    return {};
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
