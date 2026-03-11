// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CreateTicketRequest extends BaseRequestDto {
  constructor({ body } = {}) {
    super();
    this.body = body;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.body;
  }

  isMultipart() {
    return false;
  }
}
