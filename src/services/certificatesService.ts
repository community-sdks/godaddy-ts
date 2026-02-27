import { AbstractService } from './abstractService.js';

export class CertificatesService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, CertificatesService.BASE_URL);
  }

  async certificate_create(certificateCreate, xMarketId = null) {
    return this.call('POST', '/v1/certificates', { headers: { 'X-Market-Id': xMarketId }, body: certificateCreate });
  }

  async certificate_validate(certificateCreate, xMarketId = null) {
    return this.call('POST', '/v1/certificates/validate', { headers: { 'X-Market-Id': xMarketId }, body: certificateCreate });
  }

  async certificate_get(certificateId) {
    return this.call('GET', '/v1/certificates/{certificateId}', { pathParams: { certificateId } });
  }

  async certificate_action_retrieve(certificateId) {
    return this.call('GET', '/v1/certificates/{certificateId}/actions', { pathParams: { certificateId } });
  }

  async certificate_resend_email(certificateId, emailId) {
    return this.call('POST', '/v1/certificates/{certificateId}/email/{emailId}/resend', { pathParams: { certificateId, emailId } });
  }

  async certificate_alternate_email_address(certificateId, emailAddress) {
    return this.call('POST', '/v1/certificates/{certificateId}/email/resend/{emailAddress}', { pathParams: { certificateId, emailAddress } });
  }

  async certificate_resend_email_address(certificateId, emailId, emailAddress) {
    return this.call('POST', '/v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}', { pathParams: { certificateId, emailId, emailAddress } });
  }

  async certificate_email_history(certificateId) {
    return this.call('GET', '/v1/certificates/{certificateId}/email/history', { pathParams: { certificateId } });
  }

  async certificate_callback_delete(certificateId) {
    return this.call('DELETE', '/v1/certificates/{certificateId}/callback', { pathParams: { certificateId } });
  }

  async certificate_callback_get(certificateId) {
    return this.call('GET', '/v1/certificates/{certificateId}/callback', { pathParams: { certificateId } });
  }

  async certificate_callback_replace(certificateId, callbackUrl) {
    return this.call('PUT', '/v1/certificates/{certificateId}/callback', { pathParams: { certificateId }, queryParams: { callbackUrl } });
  }

  async certificate_cancel(certificateId) {
    return this.call('POST', '/v1/certificates/{certificateId}/cancel', { pathParams: { certificateId } });
  }

  async certificate_download(certificateId) {
    return this.call('GET', '/v1/certificates/{certificateId}/download', { pathParams: { certificateId } });
  }

  async certificate_reissue(certificateId, reissueCreate) {
    return this.call('POST', '/v1/certificates/{certificateId}/reissue', { pathParams: { certificateId }, body: reissueCreate });
  }

  async certificate_renew(certificateId, renewCreate) {
    return this.call('POST', '/v1/certificates/{certificateId}/renew', { pathParams: { certificateId }, body: renewCreate });
  }

  async certificate_revoke(certificateId, certificateRevoke) {
    return this.call('POST', '/v1/certificates/{certificateId}/revoke', { pathParams: { certificateId }, body: certificateRevoke });
  }

  async certificate_siteseal_get(certificateId, theme = null, locale = null) {
    return this.call('GET', '/v1/certificates/{certificateId}/siteSeal', { pathParams: { certificateId }, queryParams: { theme, locale } });
  }

  async certificate_verifydomaincontrol(certificateId) {
    return this.call('POST', '/v1/certificates/{certificateId}/verifyDomainControl', { pathParams: { certificateId } });
  }

  async certificate_get_entitlement(entitlementId, latest = null) {
    return this.call('GET', '/v2/certificates', { queryParams: { entitlementId, latest } });
  }

  async certificate_create_v2(subscriptionCertificateCreate, xMarketId = null) {
    return this.call('POST', '/v2/certificates', { headers: { 'X-Market-Id': xMarketId }, body: subscriptionCertificateCreate });
  }

  async certificate_download_entitlement(entitlementId) {
    return this.call('GET', '/v2/certificates/download', { queryParams: { entitlementId } });
  }

  async getCustomerCertificatesByCustomerId(customerId, offset = null, limit = null) {
    return this.call('GET', '/v2/customers/{customerId}/certificates', { pathParams: { customerId }, queryParams: { offset, limit } });
  }

  async getCertificateDetailByCertIdentifier(customerId, certificateId) {
    return this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}', { pathParams: { customerId, certificateId } });
  }

  async getDomainInformationByCertificateId(customerId, certificateId) {
    return this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications', { pathParams: { customerId, certificateId } });
  }

  async getDomainDetailsByDomain(customerId, certificateId, domain) {
    return this.call('GET', '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}', { pathParams: { customerId, certificateId, domain } });
  }

  async getAcmeExternalAccountBinding(customerId) {
    return this.call('GET', '/v2/customers/{customerId}/certificates/acme/externalAccountBinding', { pathParams: { customerId } });
  }

  async retrieveSslByDomainReseller(pageSize = null, page = null, domain = null, status = null, type = null, validation = null) {
    return this.call('GET', '/v2/certificates/subscriptions/search', { queryParams: { pageSize, page, domain, status, type, validation } });
  }

  async retrieveSslByDomainSubscriptionReseller(guid, pageSize = null, page = null, domain = null, status = null, type = null, validation = null) {
    return this.call('GET', '/v2/certificates/subscription/{guid}', { pathParams: { guid }, queryParams: { pageSize, page, domain, status, type, validation } });
  }
}
