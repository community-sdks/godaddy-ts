import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CsrSubmissionResponseData {
  csrId?: string;
  message?: string;
}

export class CsrSubmissionResponse extends BaseResponseDto {
  csrId?: string;
  message?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CsrSubmissionResponseData = raw && typeof raw === 'object' ? (raw as CsrSubmissionResponseData) : {};
    this.csrId = source.csrId;
    this.message = source.message;
  }
}
