// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  GetRequestDto,
} from '../dto/agreements/requests/index.js';
import {
  GetResponseDto,
} from '../dto/agreements/responses/index.js';

export class AgreementsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    get: GetRequestDto,
  };

  static responseDtos = {
    get: GetResponseDto,
  };

  constructor(client) {
    super(client, AgreementsService.BASE_URL);
  }

  async get(request = new GetRequestDto()) {
    const requestDto = GetRequestDto.from(request);
    const response = await this.call('GET', '/v1/agreements', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetResponseDto.from(response);
  }
}
