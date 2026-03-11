// @ts-nocheck
import { BaseResponseDto } from '../../baseResponseDto.js';

export class CertificateEmailHistoryResponse extends BaseResponseDto {
  constructor(raw = null) {
    super(raw);
    const source = raw && typeof raw === 'object' ? raw : {};
    this.id = source.id;
    this.accountId = source.accountId;
    this.templateType = source.templateType;
    this.fromType = source.fromType;
    this.recipients = source.recipients;
    this.body = source.body;
    this.dateEntered = source.dateEntered;
    this.subject = source.subject;
  }
}
