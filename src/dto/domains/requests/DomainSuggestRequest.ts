// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class DomainSuggestRequest extends BaseRequestDto {
  constructor({ xShopperId, query, country, city, sources, tlds, lengthMax, lengthMin, limit, waitMs } = {}) {
    super();
    this.xShopperId = xShopperId;
    this.query = query;
    this.country = country;
    this.city = city;
    this.sources = sources;
    this.tlds = tlds;
    this.lengthMax = lengthMax;
    this.lengthMin = lengthMin;
    this.limit = limit;
    this.waitMs = waitMs;
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {
      query: this.query,
      country: this.country,
      city: this.city,
      sources: this.sources,
      tlds: this.tlds,
      lengthMax: this.lengthMax,
      lengthMin: this.lengthMin,
      limit: this.limit,
      waitMs: this.waitMs,
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
