// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCsrStatusRequest extends BaseRequestDto {
  constructor({ agentId, csrId } = {}) {
    super();
    this.agentId = agentId;
    this.csrId = csrId;
  }

  toPathParams() {
    return {
      agentId: this.agentId,
      csrId: this.csrId,
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
