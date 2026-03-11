import { BaseResponseDto } from '../../baseResponseDto.js';

export type GetCountryResponseDtoData = Array<Record<string, unknown>>;

export class GetCountryResponseDto extends BaseResponseDto {
  items: GetCountryResponseDtoData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as GetCountryResponseDtoData) : [];
  }
}
