import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainActionCollectionResponseData = Array<Record<string, unknown>>;

export class DomainActionCollectionResponse extends BaseResponseDto {
  items: DomainActionCollectionResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as DomainActionCollectionResponseData) : [];
  }
}
