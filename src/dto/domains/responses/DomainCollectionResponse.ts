import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainCollectionResponseData = Array<Record<string, unknown>>;

export class DomainCollectionResponse extends BaseResponseDto {
  items: DomainCollectionResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as DomainCollectionResponseData) : [];
  }
}
