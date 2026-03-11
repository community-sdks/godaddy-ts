// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainNotificationSchemaResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.id = source.id;
    this.models = source.models;
    this.properties = source.properties;
    this.required = source.required;
  }
}
