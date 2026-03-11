// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DeleteRequestDto extends BaseRequestDto {
  constructor({ shopperId, auditClientIp } = {}) {
    super();
    this.shopperId = shopperId;
    this.auditClientIp = auditClientIp;
  }

  toPathParams() {
    return {
      shopperId: this.shopperId,
    };
  }

  toQueryParams() {
    return {
      auditClientIp: this.auditClientIp,
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
