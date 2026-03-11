// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetMetricsRequestDto extends BaseRequestDto {
  constructor({ customerId, periodStartPtz, periodEndPtz, limit, offset, xRequestId } = {}) {
    super();
    this.customerId = customerId;
    this.periodStartPtz = periodStartPtz;
    this.periodEndPtz = periodEndPtz;
    this.limit = limit;
    this.offset = offset;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {
      periodStartPtz: this.periodStartPtz,
      periodEndPtz: this.periodEndPtz,
      limit: this.limit,
      offset: this.offset,
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
