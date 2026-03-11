// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainsUsageRequest extends BaseRequestDto {
  constructor({ yyyymm, xRequestId, includes } = {}) {
    super();
    this.yyyymm = yyyymm;
    this.xRequestId = xRequestId;
    this.includes = includes;
  }

  toPathParams() {
    return {
      yyyymm: this.yyyymm,
    };
  }

  toQueryParams() {
    return {
      includes: this.includes,
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
