import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainNotificationSchemaResponseModelsType = Record<string, unknown>;
export type DomainNotificationSchemaResponsePropertiesType = Record<string, unknown>;

export interface DomainNotificationSchemaResponseData {
  id?: string;
  models?: DomainNotificationSchemaResponseModelsType;
  properties?: DomainNotificationSchemaResponsePropertiesType;
  required?: Array<string>;
}

export class DomainNotificationSchemaResponse extends BaseResponseDto {
  id?: string;
  models?: DomainNotificationSchemaResponseModelsType;
  properties?: DomainNotificationSchemaResponsePropertiesType;
  required?: Array<string>;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainNotificationSchemaResponseData = raw && typeof raw === 'object' ? (raw as DomainNotificationSchemaResponseData) : {};
    this.id = source.id;
    this.models = source.models;
    this.properties = source.properties;
    this.required = source.required;
  }
}
