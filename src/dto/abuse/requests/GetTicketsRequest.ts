import { BaseRequestDto } from '../../baseRequestDto.js';

export enum GetTicketsRequestTypeEnum {
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

export interface GetTicketsRequestParams {
  type?: GetTicketsRequestTypeEnum;
  closed?: boolean;
  sourceDomainOrIp?: string;
  target?: string;
  createdStart?: string;
  createdEnd?: string;
  limit?: number;
  offset?: number;
}

export interface GetTicketsRequestPathParams {
  [key: string]: unknown;
}

export interface GetTicketsRequestQueryParams {
  [key: string]: unknown;
}

export interface GetTicketsRequestHeaders {
  [key: string]: unknown;
}

export class GetTicketsRequest extends BaseRequestDto {
  type?: GetTicketsRequestTypeEnum;
  closed?: boolean;
  sourceDomainOrIp?: string;
  target?: string;
  createdStart?: string;
  createdEnd?: string;
  limit?: number;
  offset?: number;
  constructor({ type, closed, sourceDomainOrIp, target, createdStart, createdEnd, limit, offset }: GetTicketsRequestParams = {}) {
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
  toPathParams(): GetTicketsRequestPathParams {
    return {};
  }
  toQueryParams(): GetTicketsRequestQueryParams {
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
  toHeaders(): GetTicketsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
