// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class GetStatusResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.billingState = source.billingState;
  }
}
