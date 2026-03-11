// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class ListingActionResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.listingActionId = source.listingActionId;
  }
}
