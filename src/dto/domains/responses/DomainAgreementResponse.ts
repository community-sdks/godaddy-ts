import { BaseResponseDto } from '../../baseResponseDto.js';

export type DomainAgreementResponseData = Array<Record<string, unknown>>;

export class DomainAgreementResponse extends BaseResponseDto {
  items: DomainAgreementResponseData;
  constructor(raw: unknown = null) {
    super(raw);
    this.items = Array.isArray(raw) ? (raw as DomainAgreementResponseData) : [];
  }
}
