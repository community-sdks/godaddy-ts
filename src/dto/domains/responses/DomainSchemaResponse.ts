import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainSchemaResponseModelsType = Record<string, unknown>;
export type DomainSchemaResponsePropertiesType = Record<string, unknown>;

export interface DomainSchemaResponseData {
  id?: string;
  models?: DomainSchemaResponseModelsType;
  properties?: DomainSchemaResponsePropertiesType;
  required?: Array<string>;
}

export class DomainSchemaResponse extends BaseResponseDto {
  id?: string;
  models?: DomainSchemaResponseModelsType;
  properties?: DomainSchemaResponsePropertiesType;
  required?: Array<string>;
  constructor(raw: unknown = null) {
    super(raw);
    const source: DomainSchemaResponseData = raw && typeof raw === 'object' ? (raw as DomainSchemaResponseData) : {};
    this.id = source.id;
    this.models = source.models;
    this.properties = source.properties;
    this.required = source.required;
  }
}
