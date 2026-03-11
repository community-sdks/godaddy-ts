import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DomainsAgreementRequestParams {
  tlds?: Array<string>;
  privacy?: boolean;
  xMarketId?: string;
  forTransfer?: boolean;
}

export interface DomainsAgreementRequestPathParams {
  [key: string]: unknown;
}

export interface DomainsAgreementRequestQueryParams {
  [key: string]: unknown;
}

export interface DomainsAgreementRequestHeaders {
  [key: string]: unknown;
}

export class DomainsAgreementRequest extends BaseRequestDto {
  tlds?: Array<string>;
  privacy?: boolean;
  xMarketId?: string;
  forTransfer?: boolean;
  constructor({ tlds, privacy, xMarketId, forTransfer }: DomainsAgreementRequestParams = {}) {
    super();
    this.tlds = tlds;
    this.privacy = privacy;
    this.xMarketId = xMarketId;
    this.forTransfer = forTransfer;
  }
  toPathParams(): DomainsAgreementRequestPathParams {
    return {};
  }
  toQueryParams(): DomainsAgreementRequestQueryParams {
    return {
      tlds: this.tlds,
      privacy: this.privacy,
      forTransfer: this.forTransfer,
    };
  }
  toHeaders(): DomainsAgreementRequestHeaders {
    return {
      'X-Market-Id': this.xMarketId,
    };
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
