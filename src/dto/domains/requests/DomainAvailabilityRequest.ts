// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainAvailabilityRequest extends BaseRequestDto {
  constructor({ domain, checkType, forTransfer } = {}) {
    super();
    this.domain = domain;
    this.checkType = checkType;
    this.forTransfer = forTransfer;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      domain: this.domain,
      checkType: this.checkType,
      forTransfer: this.forTransfer,
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
