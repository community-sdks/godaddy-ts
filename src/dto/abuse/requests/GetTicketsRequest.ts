// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetTicketsRequest extends BaseRequestDto {
  constructor({ type, closed, sourceDomainOrIp, target, createdStart, createdEnd, limit, offset } = {}) {
    super();
    this.type = type;
    this.closed = closed;
    this.sourceDomainOrIp = sourceDomainOrIp;
    this.target = target;
    this.createdStart = createdStart;
    this.createdEnd = createdEnd;
    this.limit = limit;
    this.offset = offset;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      type: this.type,
      closed: this.closed,
      sourceDomainOrIp: this.sourceDomainOrIp,
      target: this.target,
      createdStart: this.createdStart,
      createdEnd: this.createdEnd,
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
