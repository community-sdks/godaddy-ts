// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  CreateSubaccountRequestDto,
  GetRequestDto,
  UpdateRequestDto,
  DeleteRequestDto,
  GetStatusRequestDto,
  ChangePasswordRequestDto,
} from '../dto/shoppers/requests/index.js';
import {
  CreateSubaccountResponseDto,
  GetResponseDto,
  UpdateResponseDto,
  DeleteResponseDto,
  GetStatusResponseDto,
  ChangePasswordResponseDto,
} from '../dto/shoppers/responses/index.js';

export class ShoppersService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    createSubaccount: CreateSubaccountRequestDto,
    get: GetRequestDto,
    update: UpdateRequestDto,
    delete: DeleteRequestDto,
    getStatus: GetStatusRequestDto,
    changePassword: ChangePasswordRequestDto,
  };

  static responseDtos = {
    createSubaccount: CreateSubaccountResponseDto,
    get: GetResponseDto,
    update: UpdateResponseDto,
    delete: DeleteResponseDto,
    getStatus: GetStatusResponseDto,
    changePassword: ChangePasswordResponseDto,
  };

  constructor(client) {
    super(client, ShoppersService.BASE_URL);
  }

  async createSubaccount(request = new CreateSubaccountRequestDto()) {
    const requestDto = CreateSubaccountRequestDto.from(request);
    const response = await this.call('POST', '/v1/shoppers/subaccount', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CreateSubaccountResponseDto.from(response);
  }

  async get(request = new GetRequestDto()) {
    const requestDto = GetRequestDto.from(request);
    const response = await this.call('GET', '/v1/shoppers/{shopperId}', {
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
    const response = await this.call('POST', '/v1/shoppers/{shopperId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return UpdateResponseDto.from(response);
  }

  async delete(request = new DeleteRequestDto()) {
    const requestDto = DeleteRequestDto.from(request);
    const response = await this.call('DELETE', '/v1/shoppers/{shopperId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DeleteResponseDto.from(response);
  }

  async getStatus(request = new GetStatusRequestDto()) {
    const requestDto = GetStatusRequestDto.from(request);
    const response = await this.call('GET', '/v1/shoppers/{shopperId}/status', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetStatusResponseDto.from(response);
  }

  async changePassword(request = new ChangePasswordRequestDto()) {
    const requestDto = ChangePasswordRequestDto.from(request);
    const response = await this.call('PUT', '/v1/shoppers/{shopperId}/factors/password', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return ChangePasswordResponseDto.from(response);
  }
}
