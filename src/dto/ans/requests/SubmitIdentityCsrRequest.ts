// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class SubmitIdentityCsrRequest extends BaseRequestDto {
  constructor({ agentId, body } = {}) {
    super();
    this.agentId = agentId;
    this.body = body;
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
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
