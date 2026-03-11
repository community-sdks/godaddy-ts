// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  SearchAgentsRequest,
  RegisterAgentRequest,
  ResolveAgentRequest,
  GetAgentRequest,
  VerifyAcmeRequest,
  VerifyDnsRequest,
  GetIdentityCertificatesRequest,
  SubmitIdentityCsrRequest,
  GetServerCertificatesRequest,
  SubmitServerCsrRequest,
  GetCsrStatusRequest,
  GetAgentEventsRequest,
} from '../dto/ans/requests/index.js';
import {
  AgentSearchResponse,
  AgentDetailsResponse,
  CertificateListResponse,
  CsrSubmissionResponse,
  CsrStatusResponse,
  EventPageResponse,
} from '../dto/ans/responses/index.js';

export class AnsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    search: SearchAgentsRequest,
    register: RegisterAgentRequest,
    resolve: ResolveAgentRequest,
    get: GetAgentRequest,
    verifyAcme: VerifyAcmeRequest,
    verifyDns: VerifyDnsRequest,
    getIdentityCertificates: GetIdentityCertificatesRequest,
    submitIdentityCsr: SubmitIdentityCsrRequest,
    getServerCertificates: GetServerCertificatesRequest,
    submitServerCsr: SubmitServerCsrRequest,
    getCsrStatus: GetCsrStatusRequest,
    events: GetAgentEventsRequest,
  };

  static responseDtos = {
    search: AgentSearchResponse,
    register: AgentDetailsResponse,
    resolve: AgentDetailsResponse,
    get: AgentDetailsResponse,
    verifyAcme: AgentDetailsResponse,
    verifyDns: AgentDetailsResponse,
    getIdentityCertificates: CertificateListResponse,
    submitIdentityCsr: CsrSubmissionResponse,
    getServerCertificates: CertificateListResponse,
    submitServerCsr: CsrSubmissionResponse,
    getCsrStatus: CsrStatusResponse,
    events: EventPageResponse,
  };

  constructor(client) {
    super(client, AnsService.BASE_URL);
  }

  async search(request = new SearchAgentsRequest()) {
    const requestDto = SearchAgentsRequest.from(request);
    const response = await this.call('GET', '/v1/agents', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentSearchResponse.from(response);
  }

  async register(request = new RegisterAgentRequest()) {
    const requestDto = RegisterAgentRequest.from(request);
    const response = await this.call('POST', '/v1/agents/register', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentDetailsResponse.from(response);
  }

  async resolve(request = new ResolveAgentRequest()) {
    const requestDto = ResolveAgentRequest.from(request);
    const response = await this.call('POST', '/v1/agents/resolution', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentDetailsResponse.from(response);
  }

  async get(request = new GetAgentRequest()) {
    const requestDto = GetAgentRequest.from(request);
    const response = await this.call('GET', '/v1/agents/{agentId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentDetailsResponse.from(response);
  }

  async verifyAcme(request = new VerifyAcmeRequest()) {
    const requestDto = VerifyAcmeRequest.from(request);
    const response = await this.call('POST', '/v1/agents/{agentId}/verify-acme', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentDetailsResponse.from(response);
  }

  async verifyDns(request = new VerifyDnsRequest()) {
    const requestDto = VerifyDnsRequest.from(request);
    const response = await this.call('POST', '/v1/agents/{agentId}/verify-dns', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return AgentDetailsResponse.from(response);
  }

  async getIdentityCertificates(request = new GetIdentityCertificatesRequest()) {
    const requestDto = GetIdentityCertificatesRequest.from(request);
    const response = await this.call('GET', '/v1/agents/{agentId}/certificates/identity', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateListResponse.from(response);
  }

  async submitIdentityCsr(request = new SubmitIdentityCsrRequest()) {
    const requestDto = SubmitIdentityCsrRequest.from(request);
    const response = await this.call('POST', '/v1/agents/{agentId}/certificates/identity', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CsrSubmissionResponse.from(response);
  }

  async getServerCertificates(request = new GetServerCertificatesRequest()) {
    const requestDto = GetServerCertificatesRequest.from(request);
    const response = await this.call('GET', '/v1/agents/{agentId}/certificates/server', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateListResponse.from(response);
  }

  async submitServerCsr(request = new SubmitServerCsrRequest()) {
    const requestDto = SubmitServerCsrRequest.from(request);
    const response = await this.call('POST', '/v1/agents/{agentId}/certificates/server', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CsrSubmissionResponse.from(response);
  }

  async getCsrStatus(request = new GetCsrStatusRequest()) {
    const requestDto = GetCsrStatusRequest.from(request);
    const response = await this.call('GET', '/v1/agents/{agentId}/csrs/{csrId}/status', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CsrStatusResponse.from(response);
  }

  async events(request = new GetAgentEventsRequest()) {
    const requestDto = GetAgentEventsRequest.from(request);
    const response = await this.call('GET', '/v1/agents/events', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return EventPageResponse.from(response);
  }
}
