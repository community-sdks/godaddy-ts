// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class DomainAgreementResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    this.items = Array.isArray(raw) ? raw : [];
  }
}
