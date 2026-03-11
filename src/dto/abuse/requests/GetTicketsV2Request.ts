import { BaseRequestDto } from '../../baseRequestDto.js';

export enum GetTicketsV2RequestTypeEnum {
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

export interface GetTicketsV2RequestParams {
  type?: GetTicketsV2RequestTypeEnum;
  closed?: boolean;
  sourceDomainOrIp?: string;
  target?: string;
  createdStart?: string;
  createdEnd?: string;
  limit?: number;
  offset?: number;
}

export interface GetTicketsV2RequestPathParams {
  [key: string]: unknown;
}

export interface GetTicketsV2RequestQueryParams {
  [key: string]: unknown;
}

export interface GetTicketsV2RequestHeaders {
  [key: string]: unknown;
}

export class GetTicketsV2Request extends BaseRequestDto {
  type?: GetTicketsV2RequestTypeEnum;
  closed?: boolean;
  sourceDomainOrIp?: string;
  target?: string;
  createdStart?: string;
  createdEnd?: string;
  limit?: number;
  offset?: number;
  constructor({ type, closed, sourceDomainOrIp, target, createdStart, createdEnd, limit, offset }: GetTicketsV2RequestParams = {}) {
    super();
    this.type = type;
    this.closed = closed;
    this.sourceDomainOrIp = sourceDomainOrIp;
    this.target = target;
    this.createdStart = createdStart;
    this.createdEnd = createdEnd;
    this.limit = limit;
    this.offset = offset;
  }
  toPathParams(): GetTicketsV2RequestPathParams {
    return {};
  }
  toQueryParams(): GetTicketsV2RequestQueryParams {
    return {
      type: this.type,
      closed: this.closed,
      sourceDomainOrIp: this.sourceDomainOrIp,
      target: this.target,
      createdStart: this.createdStart,
      createdEnd: this.createdEnd,
      limit: this.limit,
      offset: this.offset,
    };
  }
  toHeaders(): GetTicketsV2RequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
