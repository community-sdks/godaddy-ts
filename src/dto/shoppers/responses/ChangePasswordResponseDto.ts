// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class ChangePasswordResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.customerId = source.customerId;
    this.shopperId = source.shopperId;
  }
}
