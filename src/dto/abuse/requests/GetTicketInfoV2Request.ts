// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetTicketInfoV2Request extends BaseRequestDto {
  constructor({ ticketId } = {}) {
    super();
    this.ticketId = ticketId;
  }

  toPathParams() {
    return {
      ticketId: this.ticketId,
    };
  }

  toQueryParams() {
    return {};
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
