// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ChangePasswordRequestDto extends BaseRequestDto {
  constructor({ shopperId, secret } = {}) {
    super();
    this.shopperId = shopperId;
    this.secret = secret;
  }

  toPathParams() {
    return {
      shopperId: this.shopperId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.secret;
  }

  isMultipart() {
    return false;
  }
}
