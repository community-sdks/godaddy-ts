// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetAgentEventsRequest extends BaseRequestDto {
  constructor({ xRequestId, providerId, lastLogId, limit } = {}) {
    super();
    this.xRequestId = xRequestId;
    this.providerId = providerId;
    this.lastLogId = lastLogId;
    this.limit = limit;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      providerId: this.providerId,
      lastLogId: this.lastLogId,
      limit: this.limit,
    };
  }

  toHeaders() {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
