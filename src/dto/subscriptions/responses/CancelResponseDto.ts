// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CancelResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    this.data = null;
  }
}
