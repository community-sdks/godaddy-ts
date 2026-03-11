import { BaseResponseDto } from '../../baseResponseDto.js';

export type DeleteResponseDtoData = Record<string, unknown>;

export class DeleteResponseDto extends BaseResponseDto {
  data: Record<string, unknown> | null;
  constructor(raw: unknown = null) {
    super(raw);
    this.data = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null;
  }
}
