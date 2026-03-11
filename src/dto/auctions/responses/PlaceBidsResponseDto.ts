import { BaseResponseDto } from '../../baseResponseDto.js';

export type PlaceBidsResponseDtoData = Array<Record<string, unknown>>;

export class PlaceBidsResponseDto extends BaseResponseDto {
  items: PlaceBidsResponseDtoData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as PlaceBidsResponseDtoData) : [];
  }
}
