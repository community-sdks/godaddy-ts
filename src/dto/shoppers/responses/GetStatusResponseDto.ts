import { BaseResponseDto } from '../../baseResponseDto.js';

export enum GetStatusResponseDtoBillingStateEnum {
  ABANDONED = "ABANDONED",
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
}

export interface GetStatusResponseDtoData {
  billingState?: GetStatusResponseDtoBillingStateEnum;
}

export class GetStatusResponseDto extends BaseResponseDto {
  billingState?: GetStatusResponseDtoBillingStateEnum;
  constructor(raw: unknown = null) {
    super(raw);
    const source: GetStatusResponseDtoData = raw && typeof raw === 'object' ? (raw as GetStatusResponseDtoData) : {};
    this.billingState = source.billingState;
  }
}
