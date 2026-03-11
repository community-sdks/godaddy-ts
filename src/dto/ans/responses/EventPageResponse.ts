// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class EventPageResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.items = source.items;
    this.lastLogId = source.lastLogId;
  }
}
