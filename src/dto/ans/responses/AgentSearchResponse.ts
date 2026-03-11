// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class AgentSearchResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.agents = source.agents;
    this.hasMore = source.hasMore;
    this.limit = source.limit;
    this.offset = source.offset;
    this.returnedCount = source.returnedCount;
    this.searchCriteria = source.searchCriteria;
    this.totalCount = source.totalCount;
  }
}
