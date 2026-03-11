import { BaseRequestDto } from '../../baseRequestDto.js';

export type CreateTicketV2RequestBodyType = Record<string, unknown>;

export interface CreateTicketV2RequestParams {
  body?: CreateTicketV2RequestBodyType;
}

export interface CreateTicketV2RequestPathParams {
  [key: string]: unknown;
}

export interface CreateTicketV2RequestQueryParams {
  [key: string]: unknown;
}

export interface CreateTicketV2RequestHeaders {
  [key: string]: unknown;
}

export class CreateTicketV2Request extends BaseRequestDto {
  body?: CreateTicketV2RequestBodyType;
  constructor({ body }: CreateTicketV2RequestParams = {}) {
    super();
    this.body = body;
  }
  toPathParams(): CreateTicketV2RequestPathParams {
    return {};
  }
  toQueryParams(): CreateTicketV2RequestQueryParams {
    return {};
  }
  toHeaders(): CreateTicketV2RequestHeaders {
    return {};
  }
  toBody(): unknown {
    return this.body;
  }
  isMultipart(): boolean {
    return false;
  }
}
