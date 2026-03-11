// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateCallbackResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    this.data = null;
  }
}
