import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetTicketInfoV2RequestParams {
  ticketId?: string;
}

export interface GetTicketInfoV2RequestPathParams {
  [key: string]: unknown;
}

export interface GetTicketInfoV2RequestQueryParams {
  [key: string]: unknown;
}

export interface GetTicketInfoV2RequestHeaders {
  [key: string]: unknown;
}

export class GetTicketInfoV2Request extends BaseRequestDto {
  ticketId?: string;
  constructor({ ticketId }: GetTicketInfoV2RequestParams = {}) {
    super();
    this.ticketId = ticketId;
  }
  toPathParams(): GetTicketInfoV2RequestPathParams {
    return {
      ticketId: this.ticketId,
    };
  }
  toQueryParams(): GetTicketInfoV2RequestQueryParams {
    return {};
  }
  toHeaders(): GetTicketInfoV2RequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
