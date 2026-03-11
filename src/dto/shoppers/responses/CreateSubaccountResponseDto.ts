import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CreateSubaccountResponseDtoData {
  customerId?: string;
  shopperId?: string;
}

export class CreateSubaccountResponseDto extends BaseResponseDto {
  customerId?: string;
  shopperId?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CreateSubaccountResponseDtoData = raw && typeof raw === 'object' ? (raw as CreateSubaccountResponseDtoData) : {};
    this.customerId = source.customerId;
    this.shopperId = source.shopperId;
  }
}
