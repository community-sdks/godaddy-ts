// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  ListRequestDto,
  ProductGroupsRequestDto,
  CancelRequestDto,
  GetRequestDto,
  UpdateRequestDto,
} from '../dto/subscriptions/requests/index.js';
import {
  ListResponseDto,
  ProductGroupsResponseDto,
  CancelResponseDto,
  GetResponseDto,
  UpdateResponseDto,
} from '../dto/subscriptions/responses/index.js';

export class SubscriptionsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    list: ListRequestDto,
    productGroups: ProductGroupsRequestDto,
    cancel: CancelRequestDto,
    get: GetRequestDto,
    update: UpdateRequestDto,
  };

  static responseDtos = {
    list: ListResponseDto,
    productGroups: ProductGroupsResponseDto,
    cancel: CancelResponseDto,
    get: GetResponseDto,
    update: UpdateResponseDto,
  };

  constructor(client) {
    super(client, SubscriptionsService.BASE_URL);
  }

  async list(request = new ListRequestDto()) {
    const requestDto = ListRequestDto.from(request);
    const response = await this.call('GET', '/v1/subscriptions', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ListResponseDto.from(response);
  }

  async productGroups(request = new ProductGroupsRequestDto()) {
    const requestDto = ProductGroupsRequestDto.from(request);
    const response = await this.call('GET', '/v1/subscriptions/productGroups', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ProductGroupsResponseDto.from(response);
  }

  async cancel(request = new CancelRequestDto()) {
    const requestDto = CancelRequestDto.from(request);
    const response = await this.call('DELETE', '/v1/subscriptions/{subscriptionId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CancelResponseDto.from(response);
  }

  async get(request = new GetRequestDto()) {
    const requestDto = GetRequestDto.from(request);
    const response = await this.call('GET', '/v1/subscriptions/{subscriptionId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetResponseDto.from(response);
  }

  async update(request = new UpdateRequestDto()) {
    const requestDto = UpdateRequestDto.from(request);
    const response = await this.call('PATCH', '/v1/subscriptions/{subscriptionId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return UpdateResponseDto.from(response);
  }
}
