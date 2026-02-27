import { AbstractService } from './abstractService.js';

export class DomainsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  constructor(client) {
    super(client, DomainsService.BASE_URL);
  }

  async list(xShopperId = null, statuses = null, statusGroups = null, limit = null, marker = null, includes = null, modifiedDate = null) {
    return this.call('GET', '/v1/domains', { queryParams: { statuses, statusGroups, limit, marker, includes, modifiedDate }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async getAgreement(tlds, privacy, xMarketId = null, forTransfer = null) {
    return this.call('GET', '/v1/domains/agreements', { queryParams: { tlds, privacy, forTransfer }, headers: { 'X-Market-Id': xMarketId } });
  }

  async available(domain, checkType = null, forTransfer = null) {
    return this.call('GET', '/v1/domains/available', { queryParams: { domain, checkType, forTransfer } });
  }

  async availableBulk(domains, checkType = null) {
    return this.call('POST', '/v1/domains/available', { queryParams: { checkType }, body: domains });
  }

  async ContactsValidate(body, xPrivateLabelId = null, marketId = null) {
    return this.call('POST', '/v1/domains/contacts/validate', { queryParams: { marketId }, headers: { 'X-Private-Label-Id': xPrivateLabelId }, body: body });
  }

  async purchase(body, xShopperId = null) {
    return this.call('POST', '/v1/domains/purchase', { headers: { 'X-Shopper-Id': xShopperId }, body: body });
  }

  async schema(tld) {
    return this.call('GET', '/v1/domains/purchase/schema/{tld}', { pathParams: { tld } });
  }

  async validate(body) {
    return this.call('POST', '/v1/domains/purchase/validate', { body: body });
  }

  async suggest(xShopperId = null, query = null, country = null, city = null, sources = null, tlds = null, lengthMax = null, lengthMin = null, limit = null, waitMs = null) {
    return this.call('GET', '/v1/domains/suggest', { queryParams: { query, country, city, sources, tlds, lengthMax, lengthMin, limit, waitMs }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async tlds() {
    return this.call('GET', '/v1/domains/tlds');
  }

  async cancel(domain) {
    return this.call('DELETE', '/v1/domains/{domain}', { pathParams: { domain } });
  }

  async get(domain, xShopperId = null) {
    return this.call('GET', '/v1/domains/{domain}', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async update(domain, body, xShopperId = null) {
    return this.call('PATCH', '/v1/domains/{domain}', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: body });
  }

  async updateContacts(domain, contacts, xShopperId = null) {
    return this.call('PATCH', '/v1/domains/{domain}/contacts', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: contacts });
  }

  async cancelPrivacy(domain, xShopperId = null) {
    return this.call('DELETE', '/v1/domains/{domain}/privacy', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async purchasePrivacy(domain, body, xShopperId = null) {
    return this.call('POST', '/v1/domains/{domain}/privacy/purchase', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: body });
  }

  async recordAdd(domain, records, xShopperId = null) {
    return this.call('PATCH', '/v1/domains/{domain}/records', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: records });
  }

  async recordReplace(domain, records, xShopperId = null) {
    return this.call('PUT', '/v1/domains/{domain}/records', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: records });
  }

  async recordGet(domain, type, name, xShopperId = null, offset = null, limit = null) {
    return this.call('GET', '/v1/domains/{domain}/records/{type}/{name}', { pathParams: { domain, type, name }, queryParams: { offset, limit }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async recordReplaceTypeName(domain, type, name, records, xShopperId = null) {
    return this.call('PUT', '/v1/domains/{domain}/records/{type}/{name}', { pathParams: { domain, type, name }, headers: { 'X-Shopper-Id': xShopperId }, body: records });
  }

  async recordDeleteTypeName(domain, type, name, xShopperId = null) {
    return this.call('DELETE', '/v1/domains/{domain}/records/{type}/{name}', { pathParams: { domain, type, name }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async recordReplaceType(domain, type, records, xShopperId = null) {
    return this.call('PUT', '/v1/domains/{domain}/records/{type}', { pathParams: { domain, type }, headers: { 'X-Shopper-Id': xShopperId }, body: records });
  }

  async renew(domain, xShopperId = null, body = null) {
    return this.call('POST', '/v1/domains/{domain}/renew', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: body });
  }

  async transferIn(domain, body, xShopperId = null) {
    return this.call('POST', '/v1/domains/{domain}/transfer', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId }, body: body });
  }

  async verifyEmail(domain, xShopperId = null) {
    return this.call('POST', '/v1/domains/{domain}/verifyRegistrantEmail', { pathParams: { domain }, headers: { 'X-Shopper-Id': xShopperId } });
  }

  async get__v2_customers_customerId_domains_domain(customerId, domain, xRequestId = null, includes = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}', { pathParams: { customerId, domain }, queryParams: { includes }, headers: { 'X-Request-Id': xRequestId } });
  }

  async delete__v2_customers_customerId_domains_domain_changeOfRegistrant(customerId, domain, xRequestId = null) {
    return this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/changeOfRegistrant', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_customers_customerId_domains_domain_changeOfRegistrant(customerId, domain, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}/changeOfRegistrant', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async patch__v2_customers_customerId_domains_domain_dnssecRecords(customerId, domain, body, xRequestId = null) {
    return this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/dnssecRecords', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async delete__v2_customers_customerId_domains_domain_dnssecRecords(customerId, domain, body, xRequestId = null) {
    return this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/dnssecRecords', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async put__v2_customers_customerId_domains_domain_nameServers(customerId, domain, body, xRequestId = null) {
    return this.call('PUT', '/v2/customers/{customerId}/domains/{domain}/nameServers', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async get__v2_customers_customerId_domains_domain_privacy_forwarding(customerId, domain, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}/privacy/forwarding', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async patch__v2_customers_customerId_domains_domain_privacy_forwarding(customerId, domain, body, xRequestId = null) {
    return this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/privacy/forwarding', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_redeem(customerId, domain, xRequestId = null, body = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/redeem', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_renew(customerId, domain, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/renew', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_transfer(customerId, domain, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transfer', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async get__v2_customers_customerId_domains_domain_transfer(customerId, domain, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}/transfer', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_domain_transfer_validate(customerId, domain, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transfer/validate', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_transferInAccept(customerId, domain, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInAccept', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_transferInCancel(customerId, domain, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInCancel', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_domain_transferInRestart(customerId, domain, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInRestart', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_domain_transferInRetry(customerId, domain, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInRetry', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_transferOut(customerId, domain, registrar, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOut', { pathParams: { customerId, domain }, queryParams: { registrar }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_domain_transferOutAccept(customerId, domain, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOutAccept', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_domain_transferOutReject(customerId, domain, xRequestId = null, reason = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOutReject', { pathParams: { customerId, domain }, queryParams: { reason }, headers: { 'X-Request-Id': xRequestId } });
  }

  async domainsForwardsDelete(customerId, fqdn) {
    return this.call('DELETE', '/v2/customers/{customerId}/domains/forwards/{fqdn}', { pathParams: { customerId, fqdn } });
  }

  async domainsForwardsGet(customerId, fqdn, includeSubs = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/forwards/{fqdn}', { pathParams: { customerId, fqdn }, queryParams: { includeSubs } });
  }

  async domainsForwardsPut(customerId, fqdn, body) {
    return this.call('PUT', '/v2/customers/{customerId}/domains/forwards/{fqdn}', { pathParams: { customerId, fqdn }, body: body });
  }

  async domainsForwardsPost(customerId, fqdn, body) {
    return this.call('POST', '/v2/customers/{customerId}/domains/forwards/{fqdn}', { pathParams: { customerId, fqdn }, body: body });
  }

  async get__v2_customers_customerId_domains_domain_actions(customerId, domain, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}/actions', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }

  async delete__v2_customers_customerId_domains_domain_actions_type(customerId, domain, type, xRequestId = null) {
    return this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/actions/{type}', { pathParams: { customerId, domain, type }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_customers_customerId_domains_domain_actions_type(customerId, domain, type, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/{domain}/actions/{type}', { pathParams: { customerId, domain, type }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_customers_customerId_domains_notifications(customerId, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/notifications', { pathParams: { customerId }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_customers_customerId_domains_notifications_optIn(customerId, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/notifications/optIn', { pathParams: { customerId }, headers: { 'X-Request-Id': xRequestId } });
  }

  async put__v2_customers_customerId_domains_notifications_optIn(customerId, types, xRequestId = null) {
    return this.call('PUT', '/v2/customers/{customerId}/domains/notifications/optIn', { pathParams: { customerId }, queryParams: { types }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_customers_customerId_domains_notifications_schemas_type(customerId, type, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/notifications/schemas/{type}', { pathParams: { customerId, type }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_notifications_notificationId_acknowledge(customerId, notificationId, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge', { pathParams: { customerId, notificationId }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_register(customerId, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/register', { pathParams: { customerId }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async get__v2_customers_customerId_domains_register_schema_tld(customerId, tld, xRequestId = null) {
    return this.call('GET', '/v2/customers/{customerId}/domains/register/schema/{tld}', { pathParams: { customerId, tld }, headers: { 'X-Request-Id': xRequestId } });
  }

  async post__v2_customers_customerId_domains_register_validate(customerId, body, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/register/validate', { pathParams: { customerId }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async get__v2_domains_maintenances(xRequestId = null, status = null, modifiedAtAfter = null, startsAtAfter = null, limit = null) {
    return this.call('GET', '/v2/domains/maintenances', { queryParams: { status, modifiedAtAfter, startsAtAfter, limit }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_domains_maintenances_maintenanceId(maintenanceId, xRequestId = null) {
    return this.call('GET', '/v2/domains/maintenances/{maintenanceId}', { pathParams: { maintenanceId }, headers: { 'X-Request-Id': xRequestId } });
  }

  async get__v2_domains_usage_yyyymm(yyyymm, xRequestId = null, includes = null) {
    return this.call('GET', '/v2/domains/usage/{yyyymm}', { pathParams: { yyyymm }, queryParams: { includes }, headers: { 'X-Request-Id': xRequestId } });
  }

  async patch__v2_customers_customerId_domains_domain_contacts(customerId, domain, body, xRequestId = null) {
    return this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/contacts', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId }, body: body });
  }

  async post__v2_customers_customerId_domains_domain_regenerateAuthCode(customerId, domain, xRequestId = null) {
    return this.call('POST', '/v2/customers/{customerId}/domains/{domain}/regenerateAuthCode', { pathParams: { customerId, domain }, headers: { 'X-Request-Id': xRequestId } });
  }
}
