// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateBundleResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.pems = source.pems;
    this.serialNumber = source.serialNumber;
  }
}
