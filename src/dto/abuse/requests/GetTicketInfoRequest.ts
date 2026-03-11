import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetTicketInfoRequestParams {
  ticketId?: string;
}

export interface GetTicketInfoRequestPathParams {
  [key: string]: unknown;
}

export interface GetTicketInfoRequestQueryParams {
  [key: string]: unknown;
}

export interface GetTicketInfoRequestHeaders {
  [key: string]: unknown;
}

export class GetTicketInfoRequest extends BaseRequestDto {
  ticketId?: string;
  constructor({ ticketId }: GetTicketInfoRequestParams = {}) {
    super();
    this.ticketId = ticketId;
  }
  toPathParams(): GetTicketInfoRequestPathParams {
    return {
      ticketId: this.ticketId,
    };
  }
  toQueryParams(): GetTicketInfoRequestQueryParams {
    return {};
  }
  toHeaders(): GetTicketInfoRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
