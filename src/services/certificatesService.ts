// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  CreateCertificateRequest,
  ValidateCertificateRequest,
  GetCertificateRequest,
  ListCertificateActionsRequest,
  ResendCertificateEmailRequest,
  AddAlternateEmailAddressRequest,
  ResendCertificateEmailToAddressRequest,
  GetCertificateEmailHistoryRequest,
  DeleteCertificateCallbackRequest,
  GetCertificateCallbackRequest,
  ReplaceCertificateCallbackRequest,
  CancelCertificateRequest,
  DownloadCertificateRequest,
  ReissueCertificateRequest,
  RenewCertificateRequest,
  RevokeCertificateRequest,
  GetCertificateSiteSealRequest,
  VerifyCertificateDomainControlRequest,
  GetCertificatesByEntitlementRequest,
  CreateCertificateForEntitlementRequest,
  DownloadCertificateByEntitlementRequest,
  ListCustomerCertificatesRequest,
  GetCustomerCertificateRequest,
  ListDomainVerificationsRequest,
  GetDomainVerificationDetailsRequest,
  GetAcmeExternalAccountBindingRequest,
  SearchSubscriptionsByDomainRequest,
  ListSubscriptionCertificatesRequest,
} from '../dto/certificates/requests/index.js';
import {
  CertificateIdentifierResponse,
  CertificateValidationResponse,
  CertificateActionListResponse,
  CertificateEmailHistoryResponse,
  CertificateCallbackResponse,
  CertificateBundleResponse,
  CertificateSiteSealResponse,
  CertificateCollectionResponse,
  CertificateDomainVerificationResponse,
  CertificateAcmeExternalAccountBindingResponse,
} from '../dto/certificates/responses/index.js';

export class CertificatesService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    create: CreateCertificateRequest,
    validate: ValidateCertificateRequest,
    get: GetCertificateRequest,
    listActions: ListCertificateActionsRequest,
    resendEmail: ResendCertificateEmailRequest,
    addAlternateEmailAddress: AddAlternateEmailAddressRequest,
    resendEmailToAddress: ResendCertificateEmailToAddressRequest,
    getEmailHistory: GetCertificateEmailHistoryRequest,
    deleteCallback: DeleteCertificateCallbackRequest,
    getCallback: GetCertificateCallbackRequest,
    replaceCallback: ReplaceCertificateCallbackRequest,
    cancel: CancelCertificateRequest,
    download: DownloadCertificateRequest,
    reissue: ReissueCertificateRequest,
    renew: RenewCertificateRequest,
    revoke: RevokeCertificateRequest,
    getSiteSeal: GetCertificateSiteSealRequest,
    verifyDomainControl: VerifyCertificateDomainControlRequest,
    getByEntitlement: GetCertificatesByEntitlementRequest,
    createForEntitlement: CreateCertificateForEntitlementRequest,
    downloadByEntitlement: DownloadCertificateByEntitlementRequest,
    listCustomerCertificates: ListCustomerCertificatesRequest,
    getCustomerCertificate: GetCustomerCertificateRequest,
    listDomainVerifications: ListDomainVerificationsRequest,
    getDomainVerificationDetails: GetDomainVerificationDetailsRequest,
    getAcmeExternalAccountBinding: GetAcmeExternalAccountBindingRequest,
    searchSubscriptionsByDomain: SearchSubscriptionsByDomainRequest,
    listSubscriptionCertificates: ListSubscriptionCertificatesRequest,
  };

  static responseDtos = {
    create: CertificateIdentifierResponse,
    validate: CertificateValidationResponse,
    get: CertificateIdentifierResponse,
    listActions: CertificateActionListResponse,
    resendEmail: CertificateIdentifierResponse,
    addAlternateEmailAddress: CertificateIdentifierResponse,
    resendEmailToAddress: CertificateIdentifierResponse,
    getEmailHistory: CertificateEmailHistoryResponse,
    deleteCallback: CertificateCallbackResponse,
    getCallback: CertificateCallbackResponse,
    replaceCallback: CertificateCallbackResponse,
    cancel: CertificateIdentifierResponse,
    download: CertificateBundleResponse,
    reissue: CertificateIdentifierResponse,
    renew: CertificateIdentifierResponse,
    revoke: CertificateIdentifierResponse,
    getSiteSeal: CertificateSiteSealResponse,
    verifyDomainControl: CertificateIdentifierResponse,
    getByEntitlement: CertificateCollectionResponse,
    createForEntitlement: CertificateIdentifierResponse,
    downloadByEntitlement: CertificateBundleResponse,
    listCustomerCertificates: CertificateCollectionResponse,
    getCustomerCertificate: CertificateIdentifierResponse,
    listDomainVerifications: CertificateCollectionResponse,
    getDomainVerificationDetails: CertificateDomainVerificationResponse,
    getAcmeExternalAccountBinding: CertificateAcmeExternalAccountBindingResponse,
    searchSubscriptionsByDomain: CertificateCollectionResponse,
    listSubscriptionCertificates: CertificateCollectionResponse,
  };

  constructor(client) {
    super(client, CertificatesService.BASE_URL);
  }

  async create(request = new CreateCertificateRequest()) {
    const requestDto = CreateCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async validate(request = new ValidateCertificateRequest()) {
    const requestDto = ValidateCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/validate', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateValidationResponse.from(response);
  }

  async get(request = new GetCertificateRequest()) {
    const requestDto = GetCertificateRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async listActions(request = new ListCertificateActionsRequest()) {
    const requestDto = ListCertificateActionsRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}/actions', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateActionListResponse.from(response);
  }

  async resendEmail(request = new ResendCertificateEmailRequest()) {
    const requestDto = ResendCertificateEmailRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/email/{emailId}/resend', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async addAlternateEmailAddress(request = new AddAlternateEmailAddressRequest()) {
    const requestDto = AddAlternateEmailAddressRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/email/resend/{emailAddress}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async resendEmailToAddress(request = new ResendCertificateEmailToAddressRequest()) {
    const requestDto = ResendCertificateEmailToAddressRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async getEmailHistory(request = new GetCertificateEmailHistoryRequest()) {
    const requestDto = GetCertificateEmailHistoryRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}/email/history', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateEmailHistoryResponse.from(response);
  }

  async deleteCallback(request = new DeleteCertificateCallbackRequest()) {
    const requestDto = DeleteCertificateCallbackRequest.from(request);
    const response = await this.call('DELETE', '/v1/certificates/{certificateId}/callback', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCallbackResponse.from(response);
  }

  async getCallback(request = new GetCertificateCallbackRequest()) {
    const requestDto = GetCertificateCallbackRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}/callback', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCallbackResponse.from(response);
  }

  async replaceCallback(request = new ReplaceCertificateCallbackRequest()) {
    const requestDto = ReplaceCertificateCallbackRequest.from(request);
    const response = await this.call('PUT', '/v1/certificates/{certificateId}/callback', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCallbackResponse.from(response);
  }

  async cancel(request = new CancelCertificateRequest()) {
    const requestDto = CancelCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/cancel', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async download(request = new DownloadCertificateRequest()) {
    const requestDto = DownloadCertificateRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}/download', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateBundleResponse.from(response);
  }

  async reissue(request = new ReissueCertificateRequest()) {
    const requestDto = ReissueCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/reissue', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async renew(request = new RenewCertificateRequest()) {
    const requestDto = RenewCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/renew', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async revoke(request = new RevokeCertificateRequest()) {
    const requestDto = RevokeCertificateRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/revoke', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async getSiteSeal(request = new GetCertificateSiteSealRequest()) {
    const requestDto = GetCertificateSiteSealRequest.from(request);
    const response = await this.call('GET', '/v1/certificates/{certificateId}/siteSeal', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateSiteSealResponse.from(response);
  }

  async verifyDomainControl(request = new VerifyCertificateDomainControlRequest()) {
    const requestDto = VerifyCertificateDomainControlRequest.from(request);
    const response = await this.call('POST', '/v1/certificates/{certificateId}/verifyDomainControl', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async getByEntitlement(request = new GetCertificatesByEntitlementRequest()) {
    const requestDto = GetCertificatesByEntitlementRequest.from(request);
    const response = await this.call('GET', '/v2/certificates', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCollectionResponse.from(response);
  }

  async createForEntitlement(request = new CreateCertificateForEntitlementRequest()) {
    const requestDto = CreateCertificateForEntitlementRequest.from(request);
    const response = await this.call('POST', '/v2/certificates', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async downloadByEntitlement(request = new DownloadCertificateByEntitlementRequest()) {
    const requestDto = DownloadCertificateByEntitlementRequest.from(request);
    const response = await this.call('GET', '/v2/certificates/download', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateBundleResponse.from(response);
  }

  async listCustomerCertificates(request = new ListCustomerCertificatesRequest()) {
    const requestDto = ListCustomerCertificatesRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/certificates', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCollectionResponse.from(response);
  }

  async getCustomerCertificate(request = new GetCustomerCertificateRequest()) {
    const requestDto = GetCustomerCertificateRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateIdentifierResponse.from(response);
  }

  async listDomainVerifications(request = new ListDomainVerificationsRequest()) {
    const requestDto = ListDomainVerificationsRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCollectionResponse.from(response);
  }

  async getDomainVerificationDetails(request = new GetDomainVerificationDetailsRequest()) {
    const requestDto = GetDomainVerificationDetailsRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateDomainVerificationResponse.from(response);
  }

  async getAcmeExternalAccountBinding(request = new GetAcmeExternalAccountBindingRequest()) {
    const requestDto = GetAcmeExternalAccountBindingRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/certificates/acme/externalAccountBinding', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateAcmeExternalAccountBindingResponse.from(response);
  }

  async searchSubscriptionsByDomain(request = new SearchSubscriptionsByDomainRequest()) {
    const requestDto = SearchSubscriptionsByDomainRequest.from(request);
    const response = await this.call('GET', '/v2/certificates/subscriptions/search', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCollectionResponse.from(response);
  }

  async listSubscriptionCertificates(request = new ListSubscriptionCertificatesRequest()) {
    const requestDto = ListSubscriptionCertificatesRequest.from(request);
    const response = await this.call('GET', '/v2/certificates/subscription/{guid}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return CertificateCollectionResponse.from(response);
  }
}
