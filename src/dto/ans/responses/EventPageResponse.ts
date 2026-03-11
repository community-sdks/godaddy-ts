import { BaseResponseDto } from '../../baseResponseDto.js';

export interface EventPageResponseData {
  items?: Array<Record<string, unknown>>;
  lastLogId?: string;
}

export class EventPageResponse extends BaseResponseDto {
  items?: Array<Record<string, unknown>>;
  lastLogId?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: EventPageResponseData = raw && typeof raw === 'object' ? (raw as EventPageResponseData) : {};
    this.items = source.items;
    this.lastLogId = source.lastLogId;
  }
}
