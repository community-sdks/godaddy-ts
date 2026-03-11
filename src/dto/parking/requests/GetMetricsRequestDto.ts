import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetMetricsRequestDtoParams {
  customerId?: string;
  periodStartPtz?: string;
  periodEndPtz?: string;
  limit?: number;
  offset?: number;
  xRequestId?: string;
}

export interface GetMetricsRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetMetricsRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetMetricsRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetMetricsRequestDto extends BaseRequestDto {
  customerId?: string;
  periodStartPtz?: string;
  periodEndPtz?: string;
  limit?: number;
  offset?: number;
  xRequestId?: string;
  constructor({ customerId, periodStartPtz, periodEndPtz, limit, offset, xRequestId }: GetMetricsRequestDtoParams = {}) {
    super();
    this.customerId = customerId;
    this.periodStartPtz = periodStartPtz;
    this.periodEndPtz = periodEndPtz;
    this.limit = limit;
    this.offset = offset;
    this.xRequestId = xRequestId;
  }
  toPathParams(): GetMetricsRequestDtoPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): GetMetricsRequestDtoQueryParams {
    return {
      periodStartPtz: this.periodStartPtz,
      periodEndPtz: this.periodEndPtz,
      limit: this.limit,
      offset: this.offset,
    };
  }
  toHeaders(): GetMetricsRequestDtoHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
