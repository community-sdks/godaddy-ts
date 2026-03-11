// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  ListRequestDto,
  GetRequestDto,
} from '../dto/orders/requests/index.js';
import {
  ListResponseDto,
  GetResponseDto,
} from '../dto/orders/responses/index.js';

export class OrdersService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    list: ListRequestDto,
    get: GetRequestDto,
  };

  static responseDtos = {
    list: ListResponseDto,
    get: GetResponseDto,
  };

  constructor(client) {
    super(client, OrdersService.BASE_URL);
  }

  async list(request = new ListRequestDto()) {
    const requestDto = ListRequestDto.from(request);
    const response = await this.call('GET', '/v1/orders', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ListResponseDto.from(response);
  }

  async get(request = new GetRequestDto()) {
    const requestDto = GetRequestDto.from(request);
    const response = await this.call('GET', '/v1/orders/{orderId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetResponseDto.from(response);
  }
}
