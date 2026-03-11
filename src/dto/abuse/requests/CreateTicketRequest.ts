import { BaseRequestDto } from '../../baseRequestDto.js';

export type CreateTicketRequestBody = Record<string, unknown>;

export interface CreateTicketRequestParams {
  body?: CreateTicketRequestBody;
}

export interface CreateTicketRequestPathParams {
  [key: string]: unknown;
}

export interface CreateTicketRequestQueryParams {
  [key: string]: unknown;
}

export interface CreateTicketRequestHeaders {
  [key: string]: unknown;
}

export class CreateTicketRequest extends BaseRequestDto {
  body?: CreateTicketRequestBody;
  constructor({ body }: CreateTicketRequestParams = {}) {
    super();
    this.body = body;
  }
  toPathParams(): CreateTicketRequestPathParams {
    return {};
  }
  toQueryParams(): CreateTicketRequestQueryParams {
    return {};
  }
  toHeaders(): CreateTicketRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
