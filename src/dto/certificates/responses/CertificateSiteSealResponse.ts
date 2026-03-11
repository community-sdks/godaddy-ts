import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CertificateSiteSealResponseData {
  html?: string;
}

export class CertificateSiteSealResponse extends BaseResponseDto {
  html?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateSiteSealResponseData = raw && typeof raw === 'object' ? (raw as CertificateSiteSealResponseData) : {};
    this.html = source.html;
  }
}
