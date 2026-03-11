// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainsMaintenanceListRequest extends BaseRequestDto {
  constructor({ xRequestId, status, modifiedAtAfter, startsAtAfter, limit } = {}) {
    super();
    this.xRequestId = xRequestId;
    this.status = status;
    this.modifiedAtAfter = modifiedAtAfter;
    this.startsAtAfter = startsAtAfter;
    this.limit = limit;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      status: this.status,
      modifiedAtAfter: this.modifiedAtAfter,
      startsAtAfter: this.startsAtAfter,
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
