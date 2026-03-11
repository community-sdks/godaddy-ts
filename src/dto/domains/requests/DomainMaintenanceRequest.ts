// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainMaintenanceRequest extends BaseRequestDto {
  constructor({ maintenanceId, xRequestId } = {}) {
    super();
    this.maintenanceId = maintenanceId;
    this.xRequestId = xRequestId;
  }

  toPathParams() {
    return {
      maintenanceId: this.maintenanceId,
    };
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
