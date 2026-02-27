import { AbstractService } from './abstractService.js';

export class ParkingService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, ParkingService.BASE_URL);
  }

  async getMetrics(customerId, periodStartPtz = null, periodEndPtz = null, limit = null, offset = null, xRequestId = null) {
    return this.call('GET', '/v1/customers/{customerId}/parking/metrics', { pathParams: { customerId }, queryParams: { periodStartPtz, periodEndPtz, limit, offset }, headers: { 'X-Request-Id': xRequestId } });
  }

  async getMetricsByDomain(customerId, startDate, endDate, domains = null, domainLike = null, portfolioId = null, limit = null, offset = null, xRequestId = null) {
    return this.call('GET', '/v1/customers/{customerId}/parking/metricsByDomain', { pathParams: { customerId }, queryParams: { startDate, endDate, domains, domainLike, portfolioId, limit, offset }, headers: { 'X-Request-Id': xRequestId } });
  }
}
