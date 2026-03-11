// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  GetTicketsRequest,
  CreateTicketRequest,
  GetTicketInfoRequest,
  GetTicketsV2Request,
  CreateTicketV2Request,
  GetTicketInfoV2Request,
} from '../dto/abuse/requests/index.js';
import {
  AbuseTicketListResponse,
  AbuseTicketIdResponse,
  AbuseTicketDetailsResponse,
} from '../dto/abuse/responses/index.js';

export class AbuseService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    getTickets: GetTicketsRequest,
    createTicket: CreateTicketRequest,
    getTicketInfo: GetTicketInfoRequest,
    getTicketsV2: GetTicketsV2Request,
    createTicketV2: CreateTicketV2Request,
    getTicketInfoV2: GetTicketInfoV2Request,
  };

  static responseDtos = {
    getTickets: AbuseTicketListResponse,
    createTicket: AbuseTicketIdResponse,
    getTicketInfo: AbuseTicketDetailsResponse,
    getTicketsV2: AbuseTicketListResponse,
    createTicketV2: AbuseTicketIdResponse,
    getTicketInfoV2: AbuseTicketDetailsResponse,
  };

  constructor(client) {
    super(client, AbuseService.BASE_URL);
  }

  async getTickets(request = new GetTicketsRequest()) {
    const requestDto = GetTicketsRequest.from(request);
    const response = await this.call('GET', '/v1/abuse/tickets', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketListResponse.from(response);
  }

  async createTicket(request = new CreateTicketRequest()) {
    const requestDto = CreateTicketRequest.from(request);
    const response = await this.call('POST', '/v1/abuse/tickets', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketIdResponse.from(response);
  }

  async getTicketInfo(request = new GetTicketInfoRequest()) {
    const requestDto = GetTicketInfoRequest.from(request);
    const response = await this.call('GET', '/v1/abuse/tickets/{ticketId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketDetailsResponse.from(response);
  }

  async getTicketsV2(request = new GetTicketsV2Request()) {
    const requestDto = GetTicketsV2Request.from(request);
    const response = await this.call('GET', '/v2/abuse/tickets', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketListResponse.from(response);
  }

  async createTicketV2(request = new CreateTicketV2Request()) {
    const requestDto = CreateTicketV2Request.from(request);
    const response = await this.call('POST', '/v2/abuse/tickets', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketIdResponse.from(response);
  }

  async getTicketInfoV2(request = new GetTicketInfoV2Request()) {
    const requestDto = GetTicketInfoV2Request.from(request);
    const response = await this.call('GET', '/v2/abuse/tickets/{ticketId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AbuseTicketDetailsResponse.from(response);
  }
}
