// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainNotificationListResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.notificationId = source.notificationId;
    this.type = source.type;
    this.resource = source.resource;
    this.resourceType = source.resourceType;
    this.status = source.status;
    this.addedAt = source.addedAt;
    this.requestId = source.requestId;
    this.metadata = source.metadata;
  }
}
