import { BaseResponseDto } from '../../baseResponseDto.js';

export interface ListingActionResponseData {
  listingActionId?: number;
}

export class ListingActionResponse extends BaseResponseDto {
  listingActionId?: number;
  constructor(raw: unknown = null) {
    super(raw);
    const source: ListingActionResponseData = raw && typeof raw === 'object' ? (raw as ListingActionResponseData) : {};
    this.listingActionId = source.listingActionId;
  }
}
