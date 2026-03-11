import { BaseResponseDto } from '../../baseResponseDto.js';

export interface ChangePasswordResponseDtoData {
  customerId?: string;
  shopperId?: string;
}

export class ChangePasswordResponseDto extends BaseResponseDto {
  customerId?: string;
  shopperId?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: ChangePasswordResponseDtoData = raw && typeof raw === 'object' ? (raw as ChangePasswordResponseDtoData) : {};
    this.customerId = source.customerId;
    this.shopperId = source.shopperId;
  }
}
