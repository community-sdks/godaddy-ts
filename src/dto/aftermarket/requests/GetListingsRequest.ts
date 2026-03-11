import { BaseRequestDto } from '../../baseRequestDto.js';

export enum GetListingsRequestListingStatusEnum {
  FULFILLED = "FULFILLED",
}

export interface GetListingsRequestParams {
  customerId?: string;
  domains?: string;
  listingStatus?: GetListingsRequestListingStatusEnum;
  transferBefore?: string;
  transferAfter?: string;
  limit?: number;
  offset?: number;
}

export interface GetListingsRequestPathParams {
  [key: string]: unknown;
}

export interface GetListingsRequestQueryParams {
  [key: string]: unknown;
}

export interface GetListingsRequestHeaders {
  [key: string]: unknown;
}

export class GetListingsRequest extends BaseRequestDto {
  customerId?: string;
  domains?: string;
  listingStatus?: GetListingsRequestListingStatusEnum;
  transferBefore?: string;
  transferAfter?: string;
  limit?: number;
  offset?: number;
  constructor({ customerId, domains, listingStatus, transferBefore, transferAfter, limit, offset }: GetListingsRequestParams = {}) {
    super();
    this.customerId = customerId;
    this.domains = domains;
    this.listingStatus = listingStatus;
    this.transferBefore = transferBefore;
    this.transferAfter = transferAfter;
    this.limit = limit;
    this.offset = offset;
  }
  toPathParams(): GetListingsRequestPathParams {
    return {
      customerId: this.customerId,
    };
  }
  toQueryParams(): GetListingsRequestQueryParams {
    return {
      domains: this.domains,
      listingStatus: this.listingStatus,
      transferBefore: this.transferBefore,
      transferAfter: this.transferAfter,
      limit: this.limit,
      offset: this.offset,
    };
  }
  toHeaders(): GetListingsRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
