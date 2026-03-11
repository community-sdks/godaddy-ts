// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CsrSubmissionResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.csrId = source.csrId;
    this.message = source.message;
  }
}
