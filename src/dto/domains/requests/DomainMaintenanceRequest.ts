import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DomainMaintenanceRequestParams {
  maintenanceId?: string;
  xRequestId?: string;
}

export interface DomainMaintenanceRequestPathParams {
  [key: string]: unknown;
}

export interface DomainMaintenanceRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainMaintenanceRequestHeaders {
  [key: string]: unknown;
}

export class DomainMaintenanceRequest extends BaseRequestDto {
  maintenanceId?: string;
  xRequestId?: string;
  constructor({ maintenanceId, xRequestId }: DomainMaintenanceRequestParams = {}) {
    super();
    this.maintenanceId = maintenanceId;
    this.xRequestId = xRequestId;
  }
  toPathParams(): DomainMaintenanceRequestPathParams {
    return {
      maintenanceId: this.maintenanceId,
    };
  }
  toQueryParams(): DomainMaintenanceRequestQueryParams {
    return {};
  }
  toHeaders(): DomainMaintenanceRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
