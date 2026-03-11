import { BaseResponseDto } from '../../baseResponseDto.js';

export type ProductGroupsResponseDtoData = Array<Record<string, unknown>>;

export class ProductGroupsResponseDto extends BaseResponseDto {
  items: ProductGroupsResponseDtoData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as ProductGroupsResponseDtoData) : [];
  }
}
