import { BaseResponseDto } from '../../baseResponseDto.js';

export type AgentSearchResponseSearchCriteriaType = Record<string, unknown>;

export interface AgentSearchResponseData {
  agents?: Array<Record<string, unknown>>;
  hasMore?: boolean;
  limit?: number;
  offset?: number;
  returnedCount?: number;
  searchCriteria?: AgentSearchResponseSearchCriteriaType;
  totalCount?: number;
}

export class AgentSearchResponse extends BaseResponseDto {
  agents?: Array<Record<string, unknown>>;
  hasMore?: boolean;
  limit?: number;
  offset?: number;
  returnedCount?: number;
  searchCriteria?: AgentSearchResponseSearchCriteriaType;
  totalCount?: number;
  constructor(raw: unknown = null) {
    super(raw);
    const source: AgentSearchResponseData = raw && typeof raw === 'object' ? (raw as AgentSearchResponseData) : {};
    this.agents = source.agents;
    this.hasMore = source.hasMore;
    this.limit = source.limit;
    this.offset = source.offset;
    this.returnedCount = source.returnedCount;
    this.searchCriteria = source.searchCriteria;
    this.totalCount = source.totalCount;
  }
}
