import { BaseResponseDto } from '../../baseResponseDto.js';

export type CancelResponseDtoData = Record<string, unknown>;

export class CancelResponseDto extends BaseResponseDto {
  data: Record<string, unknown> | null;
  constructor(raw: unknown = null) {
    super(raw);
    this.data = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null;
  }
}
