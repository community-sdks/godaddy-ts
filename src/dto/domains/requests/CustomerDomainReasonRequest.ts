import { BaseRequestDto } from '../../baseRequestDto.js';

export enum CustomerDomainReasonRequestReasonEnum {
  EVIDENCE_OF_FRAUD = "EVIDENCE_OF_FRAUD",
  URDP_ACTION = "URDP_ACTION",
  COURT_ORDER = "COURT_ORDER",
  DISPUTE_OVER_IDENTITY = "DISPUTE_OVER_IDENTITY",
  NO_PAYMENT_FOR_PREVIOUS_REGISTRATION_PERIOD = "NO_PAYMENT_FOR_PREVIOUS_REGISTRATION_PERIOD",
  WRITTEN_OBJECTION = "WRITTEN_OBJECTION",
  TRANSFERRED_WITHIN_SIXTY_DAYS = "TRANSFERRED_WITHIN_SIXTY_DAYS",
}

export interface CustomerDomainReasonRequestParams {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  reason?: CustomerDomainReasonRequestReasonEnum;
}

export interface CustomerDomainReasonRequestPathParams {
  [key: string]: unknown;
}

export interface CustomerDomainReasonRequestQueryParams {
  [key: string]: unknown;
}

export interface CustomerDomainReasonRequestHeaders {
  [key: string]: unknown;
}

export class CustomerDomainReasonRequest extends BaseRequestDto {
  customerId?: string;
  domain?: string;
  xRequestId?: string;
  reason?: CustomerDomainReasonRequestReasonEnum;
  constructor({ customerId, domain, xRequestId, reason }: CustomerDomainReasonRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domain = domain;
    this.xRequestId = xRequestId;
    this.reason = reason;
  }
  toPathParams(): CustomerDomainReasonRequestPathParams {
    return {
      customerId: this.customerId,
      domain: this.domain,
    };
  }
  toQueryParams(): CustomerDomainReasonRequestQueryParams {
    return {
      reason: this.reason,
    };
  }
  toHeaders(): CustomerDomainReasonRequestHeaders {
    return {
      'X-Request-Id': this.xRequestId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
