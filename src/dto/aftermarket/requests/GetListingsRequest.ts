// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetListingsRequest extends BaseRequestDto {
  constructor({ customerId, domains, listingStatus, transferBefore, transferAfter, limit, offset } = {}) {
    super();
    this.customerId = customerId;
    this.domains = domains;
    this.listingStatus = listingStatus;
    this.transferBefore = transferBefore;
    this.transferAfter = transferAfter;
    this.limit = limit;
    this.offset = offset;
  }

  toPathParams() {
    return {
      customerId: this.customerId,
    };
  }

  toQueryParams() {
    return {
      domains: this.domains,
      listingStatus: this.listingStatus,
      transferBefore: this.transferBefore,
      transferAfter: this.transferAfter,
      limit: this.limit,
      offset: this.offset,
    };
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
