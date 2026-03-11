import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetAgentEventsRequestParams {
  xRequestId?: string;
  providerId?: string;
  lastLogId?: string;
  limit?: number;
}

export interface GetAgentEventsRequestPathParams {
  [key: string]: unknown;
}

export interface GetAgentEventsRequestQueryParams {
  [key: string]: unknown;
}

export interface GetAgentEventsRequestHeaders {
  [key: string]: unknown;
}

export class GetAgentEventsRequest extends BaseRequestDto {
  xRequestId?: string;
  providerId?: string;
  lastLogId?: string;
  limit?: number;
  constructor({ xRequestId, providerId, lastLogId, limit }: GetAgentEventsRequestParams = {}) {
    super();
    this.xRequestId = xRequestId;
    this.providerId = providerId;
    this.lastLogId = lastLogId;
    this.limit = limit;
  }
  toPathParams(): GetAgentEventsRequestPathParams {
    return {};
  }
  toQueryParams(): GetAgentEventsRequestQueryParams {
    return {
      providerId: this.providerId,
      lastLogId: this.lastLogId,
      limit: this.limit,
    };
  }
  toHeaders(): GetAgentEventsRequestHeaders {
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
