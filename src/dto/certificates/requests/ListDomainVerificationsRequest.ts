// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class ListDomainVerificationsRequest extends BaseRequestDto {
  constructor({ customerId, certificateId } = {}) {
    super();
    this.customerId = customerId;
    this.certificateId = certificateId;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
      certificateId: this.certificateId,
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
