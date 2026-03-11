// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  GetListingsRequest,
  DeleteListingsRequest,
  AddExpiryListingsRequest,
} from '../dto/aftermarket/requests/index.js';
import {
  ListingsResponse,
  ListingActionResponse,
} from '../dto/aftermarket/responses/index.js';

export class AftermarketService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    getListings: GetListingsRequest,
    deleteListings: DeleteListingsRequest,
    addExpiryListings: AddExpiryListingsRequest,
  };

  static responseDtos = {
    getListings: ListingsResponse,
    deleteListings: ListingActionResponse,
    addExpiryListings: ListingActionResponse,
  };

  constructor(client) {
    super(client, AftermarketService.BASE_URL);
  }

  async getListings(request = new GetListingsRequest()) {
    const requestDto = GetListingsRequest.from(request);
    const response = await this.call('GET', '/v1/customers/{customerId}/auctions/listings', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ListingsResponse.from(response);
  }

  async deleteListings(request = new DeleteListingsRequest()) {
    const requestDto = DeleteListingsRequest.from(request);
    const response = await this.call('DELETE', '/v1/aftermarket/listings', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ListingActionResponse.from(response);
  }

  async addExpiryListings(request = new AddExpiryListingsRequest()) {
    const requestDto = AddExpiryListingsRequest.from(request);
    const response = await this.call('POST', '/v1/aftermarket/listings/expiry', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ListingActionResponse.from(response);
  }
}
