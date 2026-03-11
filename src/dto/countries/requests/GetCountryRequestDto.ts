// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCountryRequestDto extends BaseRequestDto {
  constructor({ countryKey, marketId } = {}) {
    super();
    this.countryKey = countryKey;
    this.marketId = marketId;
  }

  toPathParams() {
    return {
      countryKey: this.countryKey,
    };
  }

  toQueryParams() {
    return {
      marketId: this.marketId,
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
