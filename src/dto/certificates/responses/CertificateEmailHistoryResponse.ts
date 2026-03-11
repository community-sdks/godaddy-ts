import { BaseResponseDto } from '../../baseResponseDto.js';

export interface CertificateEmailHistoryResponseData {
  id?: number;
  accountId?: number;
  templateType?: string;
  fromType?: string;
  recipients?: string;
  body?: string;
  dateEntered?: string;
  subject?: string;
}

export class CertificateEmailHistoryResponse extends BaseResponseDto {
  id?: number;
  accountId?: number;
  templateType?: string;
  fromType?: string;
  recipients?: string;
  body?: string;
  dateEntered?: string;
  subject?: string;
  constructor(raw: unknown = null) {
    super(raw);
    const source: CertificateEmailHistoryResponseData = raw && typeof raw === 'object' ? (raw as CertificateEmailHistoryResponseData) : {};
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
