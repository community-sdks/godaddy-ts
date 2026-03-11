// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  PlaceBidsRequestDto,
} from '../dto/auctions/requests/index.js';
import {
  PlaceBidsResponseDto,
} from '../dto/auctions/responses/index.js';

export class AuctionsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    placeBids: PlaceBidsRequestDto,
  };

  static responseDtos = {
    placeBids: PlaceBidsResponseDto,
  };

  constructor(client) {
    super(client, AuctionsService.BASE_URL);
  }

  async placeBids(request = new PlaceBidsRequestDto()) {
    const requestDto = PlaceBidsRequestDto.from(request);
    const response = await this.call('POST', '/v1/customers/{customerId}/aftermarket/listings/bids', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return PlaceBidsResponseDto.from(response);
  }
}
