// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class CreateSubaccountRequestDto extends BaseRequestDto {
  constructor({ subaccount } = {}) {
    super();
    this.subaccount = subaccount;
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
    return this.subaccount;
  }

  isMultipart() {
    return false;
  }
}
