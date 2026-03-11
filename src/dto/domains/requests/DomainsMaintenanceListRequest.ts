import { BaseRequestDto } from '../../baseRequestDto.js';

export enum DomainsMaintenanceListRequestStatusEnum {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
}

export interface DomainsMaintenanceListRequestParams {
  xRequestId?: string;
  status?: DomainsMaintenanceListRequestStatusEnum;
  modifiedAtAfter?: string;
  startsAtAfter?: string;
  limit?: number;
}

export interface DomainsMaintenanceListRequestPathParams {
  [key: string]: unknown;
}

export interface DomainsMaintenanceListRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainsMaintenanceListRequestHeaders {
  [key: string]: unknown;
}

export class DomainsMaintenanceListRequest extends BaseRequestDto {
  xRequestId?: string;
  status?: DomainsMaintenanceListRequestStatusEnum;
  modifiedAtAfter?: string;
  startsAtAfter?: string;
  limit?: number;
  constructor({ xRequestId, status, modifiedAtAfter, startsAtAfter, limit }: DomainsMaintenanceListRequestParams = {}) {
    super();
    this.xRequestId = xRequestId;
    this.status = status;
    this.modifiedAtAfter = modifiedAtAfter;
    this.startsAtAfter = startsAtAfter;
    this.limit = limit;
  }
  toPathParams(): DomainsMaintenanceListRequestPathParams {
    return {};
  }
  toQueryParams(): DomainsMaintenanceListRequestQueryParams {
    return {
      status: this.status,
      modifiedAtAfter: this.modifiedAtAfter,
      startsAtAfter: this.startsAtAfter,
      limit: this.limit,
    };
  }
  toHeaders(): DomainsMaintenanceListRequestHeaders {
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
