import { BaseResponseDto } from '../../baseResponseDto.js';

export enum DomainMaintenanceListResponseEnvironmentEnum {
  OTE = "OTE",
  PRODUCTION = "PRODUCTION",
}
export enum DomainMaintenanceListResponseReasonEnum {
  EMERGENCY = "EMERGENCY",
  PLANNED = "PLANNED",
}
export enum DomainMaintenanceListResponseStatusEnum {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
}
export enum DomainMaintenanceListResponseTypeEnum {
  API = "API",
  REGISTRY = "REGISTRY",
  UI = "UI",
}

export interface DomainMaintenanceListResponseData {
  createdAt?: string;
  endsAt?: string;
  environment?: DomainMaintenanceListResponseEnvironmentEnum;
  maintenanceId?: string;
  modifiedAt?: string;
  reason?: DomainMaintenanceListResponseReasonEnum;
  startsAt?: string;
  status?: DomainMaintenanceListResponseStatusEnum;
  summary?: string;
  tlds?: Array<string>;
  type?: DomainMaintenanceListResponseTypeEnum;
}

export class DomainMaintenanceListResponse extends BaseResponseDto {
  createdAt?: string;
  endsAt?: string;
  environment?: DomainMaintenanceListResponseEnvironmentEnum;
  maintenanceId?: string;
  modifiedAt?: string;
  reason?: DomainMaintenanceListResponseReasonEnum;
  startsAt?: string;
  status?: DomainMaintenanceListResponseStatusEnum;
  summary?: string;
  tlds?: Array<string>;
  type?: DomainMaintenanceListResponseTypeEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainMaintenanceListResponseData = raw && typeof raw === 'object' ? (raw as DomainMaintenanceListResponseData) : {};
    this.createdAt = source.createdAt;
    this.endsAt = source.endsAt;
    this.environment = source.environment;
    this.maintenanceId = source.maintenanceId;
    this.modifiedAt = source.modifiedAt;
    this.reason = source.reason;
    this.startsAt = source.startsAt;
    this.status = source.status;
    this.summary = source.summary;
    this.tlds = source.tlds;
    this.type = source.type;
  }
}
