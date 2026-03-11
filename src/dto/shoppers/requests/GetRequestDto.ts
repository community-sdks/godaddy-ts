// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetRequestDto extends BaseRequestDto {
  constructor({ shopperId, includes } = {}) {
    super();
    this.shopperId = shopperId;
    this.includes = includes;
  }

  toPathParams() {
    return {
      shopperId: this.shopperId,
    };
  }

  toQueryParams() {
    return {
      includes: this.includes,
    };
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
