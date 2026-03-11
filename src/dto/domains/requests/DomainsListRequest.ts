// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainsListRequest extends BaseRequestDto {
  constructor({ xShopperId, statuses, statusGroups, limit, marker, includes, modifiedDate } = {}) {
    super();
    this.xShopperId = xShopperId;
    this.statuses = statuses;
    this.statusGroups = statusGroups;
    this.limit = limit;
    this.marker = marker;
    this.includes = includes;
    this.modifiedDate = modifiedDate;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      statuses: this.statuses,
      statusGroups: this.statusGroups,
      limit: this.limit,
      marker: this.marker,
      includes: this.includes,
      modifiedDate: this.modifiedDate,
    };
  }

  toHeaders() {
    return {
      'X-Shopper-Id': this.xShopperId,
    };
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
