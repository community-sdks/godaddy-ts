import { BaseResponseDto } from '../../baseResponseDto.js';

export type GetCountriesResponseDtoData = Array<Record<string, unknown>>;

export class GetCountriesResponseDto extends BaseResponseDto {
  items: GetCountriesResponseDtoData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as GetCountriesResponseDtoData) : [];
  }
}
