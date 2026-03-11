// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainAvailabilityBulkRequest extends BaseRequestDto {
  constructor({ domains, checkType } = {}) {
    super();
    this.domains = domains;
    this.checkType = checkType;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      checkType: this.checkType,
    };
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return this.domains;
  }

  isMultipart() {
    return false;
  }
}
