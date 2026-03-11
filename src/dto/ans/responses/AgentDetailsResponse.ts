import { BaseResponseDto } from '../../baseResponseDto.js';

export enum AgentDetailsResponseStatusEnum {
  PENDING_VALIDATION = "PENDING_VALIDATION",
  PENDING_CERTS = "PENDING_CERTS",
  PENDING_DNS = "PENDING_DNS",
}

export interface AgentDetailsResponseData {
  ansName?: string;
  challenges?: Array<Record<string, unknown>>;
  dnsRecords?: Array<Record<string, unknown>>;
  expiresAt?: string;
  links?: Array<Record<string, unknown>>;
  nextSteps?: Array<Record<string, unknown>>;
  status?: AgentDetailsResponseStatusEnum;
}

export class AgentDetailsResponse extends BaseResponseDto {
  ansName?: string;
  challenges?: Array<Record<string, unknown>>;
  dnsRecords?: Array<Record<string, unknown>>;
  expiresAt?: string;
  links?: Array<Record<string, unknown>>;
  nextSteps?: Array<Record<string, unknown>>;
  status?: AgentDetailsResponseStatusEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: AgentDetailsResponseData = raw && typeof raw === 'object' ? (raw as AgentDetailsResponseData) : {};
    this.ansName = source.ansName;
    this.challenges = source.challenges;
    this.dnsRecords = source.dnsRecords;
    this.expiresAt = source.expiresAt;
    this.links = source.links;
    this.nextSteps = source.nextSteps;
    this.status = source.status;
  }
}
