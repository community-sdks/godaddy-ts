import { BaseResponseDto } from '../../baseResponseDto.js';

export interface UpdateResponseDtoData {
  customerId?: string;
  shopperId?: string;
}

export class UpdateResponseDto extends BaseResponseDto {
  customerId?: string;
  shopperId?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: UpdateResponseDtoData = raw && typeof raw === 'object' ? (raw as UpdateResponseDtoData) : {};
    this.customerId = source.customerId;
    this.shopperId = source.shopperId;
  }
}
