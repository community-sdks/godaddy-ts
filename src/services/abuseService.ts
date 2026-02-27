import { AbstractService } from './abstractService.js';

export class AbuseService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, AbuseService.BASE_URL);
  }

  async getTickets(type = null, closed = null, sourceDomainOrIp = null, target = null, createdStart = null, createdEnd = null, limit = null, offset = null) {
    return this.call('GET', '/v1/abuse/tickets', { queryParams: { type, closed, sourceDomainOrIp, target, createdStart, createdEnd, limit, offset } });
  }

  async createTicket(body) {
    return this.call('POST', '/v1/abuse/tickets', { body: body });
  }

  async getTicketInfo(ticketId) {
    return this.call('GET', '/v1/abuse/tickets/{ticketId}', { pathParams: { ticketId } });
  }

  async getTicketsV2(type = null, closed = null, sourceDomainOrIp = null, target = null, createdStart = null, createdEnd = null, limit = null, offset = null) {
    return this.call('GET', '/v2/abuse/tickets', { queryParams: { type, closed, sourceDomainOrIp, target, createdStart, createdEnd, limit, offset } });
  }

  async createTicketV2(body) {
    return this.call('POST', '/v2/abuse/tickets', { body: body });
  }

  async getTicketInfoV2(ticketId) {
    return this.call('GET', '/v2/abuse/tickets/{ticketId}', { pathParams: { ticketId } });
  }
}
