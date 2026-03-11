import { BaseResponseDto } from '../../baseResponseDto.js';

export type CertificateBundleResponsePemsType = Record<string, unknown>;

export interface CertificateBundleResponseData {
  pems?: CertificateBundleResponsePemsType;
  serialNumber?: string;
}

export class CertificateBundleResponse extends BaseResponseDto {
  pems?: CertificateBundleResponsePemsType;
  serialNumber?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateBundleResponseData = raw && typeof raw === 'object' ? (raw as CertificateBundleResponseData) : {};
    this.pems = source.pems;
    this.serialNumber = source.serialNumber;
  }
}
