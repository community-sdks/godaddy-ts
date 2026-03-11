import { BaseResponseDto } from '../../baseResponseDto.js';

export enum AbuseTicketDetailsResponseTypeEnum {
  A_RECORD = "A_RECORD",
  CHILD_ABUSE = "CHILD_ABUSE",
  CONTENT = "CONTENT",
  FRAUD_WIRE = "FRAUD_WIRE",
  IP_BLOCK = "IP_BLOCK",
  MALWARE = "MALWARE",
  NETWORK_ABUSE = "NETWORK_ABUSE",
  PHISHING = "PHISHING",
  SPAM = "SPAM",
}

export interface AbuseTicketDetailsResponseData {
  closed?: boolean;
  closedAt?: string;
  createdAt?: string;
  domainIp?: string;
  reporter?: string;
  source?: string;
  target?: string;
  ticketId?: string;
  type?: AbuseTicketDetailsResponseTypeEnum;
}

export class AbuseTicketDetailsResponse extends BaseResponseDto {
  closed?: boolean;
  closedAt?: string;
  createdAt?: string;
  domainIp?: string;
  reporter?: string;
  source?: string;
  target?: string;
  ticketId?: string;
  type?: AbuseTicketDetailsResponseTypeEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: AbuseTicketDetailsResponseData = raw && typeof raw === 'object' ? (raw as AbuseTicketDetailsResponseData) : {};
    this.closed = source.closed;
    this.closedAt = source.closedAt;
    this.createdAt = source.createdAt;
    this.domainIp = source.domainIp;
    this.reporter = source.reporter;
    this.source = source.source;
    this.target = source.target;
    this.ticketId = source.ticketId;
    this.type = source.type;
  }
}
