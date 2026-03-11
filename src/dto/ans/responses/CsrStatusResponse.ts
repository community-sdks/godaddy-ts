// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CsrStatusResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.csrId = source.csrId;
    this.failureReason = source.failureReason;
    this.status = source.status;
    this.submittedAt = source.submittedAt;
    this.type = source.type;
    this.updatedAt = source.updatedAt;
  }
}
