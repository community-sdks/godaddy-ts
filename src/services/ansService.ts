import { AbstractService } from './abstractService.js';

export class AnsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, AnsService.BASE_URL);
  }

  async searchANSName(agentDisplayName = null, version = null, agentHost = null, protocol = null, limit = null, offset = null) {
    return this.call('GET', '/v1/agents', { queryParams: { agentDisplayName, version, agentHost, protocol, limit, offset } });
  }

  async registerAgent(body) {
    return this.call('POST', '/v1/agents/register', { body: body });
  }

  async resolveANSName(body) {
    return this.call('POST', '/v1/agents/resolution', { body: body });
  }

  async getAgent(agentId) {
    return this.call('GET', '/v1/agents/{agentId}', { pathParams: { agentId } });
  }

  async validateRegistration(agentId) {
    return this.call('POST', '/v1/agents/{agentId}/verify-acme', { pathParams: { agentId } });
  }

  async verifyDnsRecords(agentId) {
    return this.call('POST', '/v1/agents/{agentId}/verify-dns', { pathParams: { agentId } });
  }

  async getAgentIdentityCertificateByAgentId(agentId) {
    return this.call('GET', '/v1/agents/{agentId}/certificates/identity', { pathParams: { agentId } });
  }

  async submitAgentIdentityCsrByAgentId(agentId, body) {
    return this.call('POST', '/v1/agents/{agentId}/certificates/identity', { pathParams: { agentId }, body: body });
  }

  async getAgentServerCertificateByAgentId(agentId) {
    return this.call('GET', '/v1/agents/{agentId}/certificates/server', { pathParams: { agentId } });
  }

  async submitAgentServerCsrByAgentId(agentId, body) {
    return this.call('POST', '/v1/agents/{agentId}/certificates/server', { pathParams: { agentId }, body: body });
  }

  async getAgentCsrStatusByAgentId(agentId, csrId) {
    return this.call('GET', '/v1/agents/{agentId}/csrs/{csrId}/status', { pathParams: { agentId, csrId } });
  }

  async getAgentEvents(xRequestId = null, providerId = null, lastLogId = null, limit = null) {
    return this.call('GET', '/v1/agents/events', { queryParams: { providerId, lastLogId, limit }, headers: { 'X-Request-Id': xRequestId } });
  }
}
