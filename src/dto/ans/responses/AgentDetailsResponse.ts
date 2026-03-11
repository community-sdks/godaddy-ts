// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class AgentDetailsResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.ansName = source.ansName;
    this.challenges = source.challenges;
    this.dnsRecords = source.dnsRecords;
    this.expiresAt = source.expiresAt;
    this.links = source.links;
    this.nextSteps = source.nextSteps;
    this.status = source.status;
  }
}
