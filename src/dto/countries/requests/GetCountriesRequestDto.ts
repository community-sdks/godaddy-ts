// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCountriesRequestDto extends BaseRequestDto {
  constructor({ marketId } = {}) {
    super();
    this.marketId = marketId;
  }

  toPathParams() {
    return {};
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
