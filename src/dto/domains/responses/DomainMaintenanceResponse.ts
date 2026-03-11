// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainMaintenanceResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
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
