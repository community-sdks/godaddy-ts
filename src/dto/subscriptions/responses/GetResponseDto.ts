import { BaseResponseDto } from '../../baseResponseDto.js';

export type GetResponseDtoData = Array<Record<string, unknown>>;

export class GetResponseDto extends BaseResponseDto {
  items: GetResponseDtoData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as GetResponseDtoData) : [];
  }
}
