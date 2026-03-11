import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateValidationResponseData = Record<string, unknown>;

export class CertificateValidationResponse extends BaseResponseDto {
  data: Record<string, unknown> | null;
  constructor(raw: unknown = null) {
    super(raw);
    this.data = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null;
  }
}
