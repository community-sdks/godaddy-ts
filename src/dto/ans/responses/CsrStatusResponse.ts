import { BaseResponseDto } from '../../baseResponseDto.js';

export enum CsrStatusResponseStatusEnum {
  PENDING = "PENDING",
  SIGNED = "SIGNED",
  REJECTED = "REJECTED",
}
export enum CsrStatusResponseTypeEnum {
  SERVER = "SERVER",
  IDENTITY = "IDENTITY",
}

export interface CsrStatusResponseData {
  csrId?: string;
  failureReason?: string;
  status?: CsrStatusResponseStatusEnum;
  submittedAt?: string;
  type?: CsrStatusResponseTypeEnum;
  updatedAt?: string;
}

export class CsrStatusResponse extends BaseResponseDto {
  csrId?: string;
  failureReason?: string;
  status?: CsrStatusResponseStatusEnum;
  submittedAt?: string;
  type?: CsrStatusResponseTypeEnum;
  updatedAt?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CsrStatusResponseData = raw && typeof raw === 'object' ? (raw as CsrStatusResponseData) : {};
    this.csrId = source.csrId;
    this.failureReason = source.failureReason;
    this.status = source.status;
    this.submittedAt = source.submittedAt;
    this.type = source.type;
    this.updatedAt = source.updatedAt;
  }
}
