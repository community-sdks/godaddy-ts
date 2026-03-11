// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainsAgreementRequest extends BaseRequestDto {
  constructor({ tlds, privacy, xMarketId, forTransfer } = {}) {
    super();
    this.tlds = tlds;
    this.privacy = privacy;
    this.xMarketId = xMarketId;
    this.forTransfer = forTransfer;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      tlds: this.tlds,
      privacy: this.privacy,
      forTransfer: this.forTransfer,
    };
  }

  toHeaders() {
    return {
      'X-Market-Id': this.xMarketId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
