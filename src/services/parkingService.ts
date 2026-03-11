// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  GetMetricsRequestDto,
  GetMetricsByDomainRequestDto,
} from '../dto/parking/requests/index.js';
import {
  GetMetricsResponseDto,
  GetMetricsByDomainResponseDto,
} from '../dto/parking/responses/index.js';

export class ParkingService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    getMetrics: GetMetricsRequestDto,
    getMetricsByDomain: GetMetricsByDomainRequestDto,
  };

  static responseDtos = {
    getMetrics: GetMetricsResponseDto,
    getMetricsByDomain: GetMetricsByDomainResponseDto,
  };

  constructor(client) {
    super(client, ParkingService.BASE_URL);
  }

  async getMetrics(request = new GetMetricsRequestDto()) {
    const requestDto = GetMetricsRequestDto.from(request);
    const response = await this.call('GET', '/v1/customers/{customerId}/parking/metrics', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetMetricsResponseDto.from(response);
  }

  async getMetricsByDomain(request = new GetMetricsByDomainRequestDto()) {
    const requestDto = GetMetricsByDomainRequestDto.from(request);
    const response = await this.call('GET', '/v1/customers/{customerId}/parking/metricsByDomain', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return GetMetricsByDomainResponseDto.from(response);
  }
}
