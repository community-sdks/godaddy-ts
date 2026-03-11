import { BaseResponseDto } from '../../baseResponseDto.js';

export enum DomainMaintenanceResponseEnvironmentEnum {
  OTE = "OTE",
  PRODUCTION = "PRODUCTION",
}
export enum DomainMaintenanceResponseReasonEnum {
  EMERGENCY = "EMERGENCY",
  PLANNED = "PLANNED",
}
export enum DomainMaintenanceResponseStatusEnum {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
}
export enum DomainMaintenanceResponseTypeEnum {
  API = "API",
  REGISTRY = "REGISTRY",
  UI = "UI",
}

export interface DomainMaintenanceResponseData {
  createdAt?: string;
  endsAt?: string;
  environment?: DomainMaintenanceResponseEnvironmentEnum;
  maintenanceId?: string;
  modifiedAt?: string;
  reason?: DomainMaintenanceResponseReasonEnum;
  startsAt?: string;
  status?: DomainMaintenanceResponseStatusEnum;
  summary?: string;
  systems?: Array<Record<string, unknown>>;
  tlds?: Array<string>;
  type?: DomainMaintenanceResponseTypeEnum;
}

export class DomainMaintenanceResponse extends BaseResponseDto {
  createdAt?: string;
  endsAt?: string;
  environment?: DomainMaintenanceResponseEnvironmentEnum;
  maintenanceId?: string;
  modifiedAt?: string;
  reason?: DomainMaintenanceResponseReasonEnum;
  startsAt?: string;
  status?: DomainMaintenanceResponseStatusEnum;
  summary?: string;
  systems?: Array<Record<string, unknown>>;
  tlds?: Array<string>;
  type?: DomainMaintenanceResponseTypeEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainMaintenanceResponseData = raw && typeof raw === 'object' ? (raw as DomainMaintenanceResponseData) : {};
    this.createdAt = source.createdAt;
    this.endsAt = source.endsAt;
    this.environment = source.environment;
    this.maintenanceId = source.maintenanceId;
    this.modifiedAt = source.modifiedAt;
    this.reason = source.reason;
    this.startsAt = source.startsAt;
    this.status = source.status;
    this.summary = source.summary;
    this.systems = source.systems;
    this.tlds = source.tlds;
    this.type = source.type;
  }
}
