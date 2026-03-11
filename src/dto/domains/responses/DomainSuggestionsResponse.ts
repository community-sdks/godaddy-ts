import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainSuggestionsResponseData = Array<Record<string, unknown>>;

export class DomainSuggestionsResponse extends BaseResponseDto {
  items: DomainSuggestionsResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as DomainSuggestionsResponseData) : [];
  }
}
