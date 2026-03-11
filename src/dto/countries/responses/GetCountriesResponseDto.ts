// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class GetCountriesResponseDto extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    this.items = Array.isArray(raw) ? raw : [];
  }
}
