// @ts-nocheck
import { AbstractService } from './abstractService.js';
import {
  DomainsListRequest,
  DomainsAgreementRequest,
  DomainAvailabilityRequest,
  DomainAvailabilityBulkRequest,
  DomainContactsValidateRequest,
  DomainPurchaseRequest,
  DomainSchemaRequest,
  DomainValidateRequest,
  DomainSuggestRequest,
  DomainsTldsRequest,
  DomainPathRequest,
  DomainBodyRequest,
  DomainTypeNameLookupRequest,
  DomainTypeNameBodyRequest,
  DomainTypeBodyRequest,
  DomainRenewRequest,
  CustomerDomainIncludesRequest,
  CustomerDomainRequest,
  CustomerDomainBodyRequest,
  CustomerDomainOptionalBodyRequest,
  CustomerDomainRegistrarRequest,
  CustomerDomainReasonRequest,
  DomainForwardingRequest,
  CustomerDomainActionTypeRequest,
  CustomerIdRequest,
  CustomerNotificationOptInUpdateRequest,
  CustomerNotificationSchemaRequest,
  CustomerNotificationAckRequest,
  CustomerRegisterRequest,
  CustomerRegisterSchemaRequest,
  CustomerRegisterValidateRequest,
  DomainsMaintenanceListRequest,
  DomainMaintenanceRequest,
  DomainsUsageRequest,
} from '../dto/domains/requests/index.js';
import {
  DomainCollectionResponse,
  DomainAgreementResponse,
  DomainAvailabilityResponse,
  DomainBulkAvailabilityResponse,
  DomainValidationResultResponse,
  DomainOrderResponse,
  DomainSchemaResponse,
  DomainSuggestionsResponse,
  DomainTldListResponse,
  DomainOperationResponse,
  DomainDetailsResponse,
  DomainRecordListResponse,
  DomainTransferResponse,
  DomainForwardingResponse,
  DomainActionCollectionResponse,
  DomainNotificationListResponse,
  DomainNotificationSchemaResponse,
  DomainNotificationAckResponse,
  DomainMaintenanceListResponse,
  DomainMaintenanceResponse,
  DomainUsageResponse,
} from '../dto/domains/responses/index.js';

export class DomainsService extends AbstractService {
  static BASE_URL = 'https://api.ote-godaddy.com';

  static requestDtos = {
    list: DomainsListRequest,
    getAgreement: DomainsAgreementRequest,
    available: DomainAvailabilityRequest,
    availableBulk: DomainAvailabilityBulkRequest,
    contactsValidate: DomainContactsValidateRequest,
    purchase: DomainPurchaseRequest,
    schema: DomainSchemaRequest,
    validate: DomainValidateRequest,
    suggest: DomainSuggestRequest,
    tlds: DomainsTldsRequest,
    cancel: DomainPathRequest,
    get: DomainPathRequest,
    update: DomainBodyRequest,
    updateContacts: DomainBodyRequest,
    cancelPrivacy: DomainPathRequest,
    purchasePrivacy: DomainBodyRequest,
    recordAdd: DomainBodyRequest,
    recordReplace: DomainBodyRequest,
    recordGet: DomainTypeNameLookupRequest,
    recordReplaceTypeName: DomainTypeNameBodyRequest,
    recordDeleteTypeName: DomainTypeNameLookupRequest,
    recordReplaceType: DomainTypeBodyRequest,
    renew: DomainRenewRequest,
    transferIn: DomainBodyRequest,
    verifyEmail: DomainPathRequest,
    getCustomerDomain: CustomerDomainIncludesRequest,
    cancelCustomerDomainChangeOfRegistrant: CustomerDomainRequest,
    getCustomerDomainChangeOfRegistrant: CustomerDomainRequest,
    addCustomerDomainDnssecRecords: CustomerDomainBodyRequest,
    removeCustomerDomainDnssecRecords: CustomerDomainBodyRequest,
    replaceCustomerDomainNameServers: CustomerDomainBodyRequest,
    getCustomerDomainPrivacyForwarding: CustomerDomainRequest,
    updateCustomerDomainPrivacyForwarding: CustomerDomainBodyRequest,
    redeemCustomerDomain: CustomerDomainOptionalBodyRequest,
    renewCustomerDomain: CustomerDomainBodyRequest,
    transferCustomerDomain: CustomerDomainBodyRequest,
    getCustomerDomainTransferStatus: CustomerDomainRequest,
    validateCustomerDomainTransfer: CustomerDomainBodyRequest,
    acceptCustomerDomainTransferIn: CustomerDomainBodyRequest,
    cancelCustomerDomainTransferIn: CustomerDomainRequest,
    restartCustomerDomainTransferIn: CustomerDomainRequest,
    retryCustomerDomainTransferIn: CustomerDomainBodyRequest,
    initiateCustomerDomainTransferOut: CustomerDomainRegistrarRequest,
    acceptCustomerDomainTransferOut: CustomerDomainRequest,
    rejectCustomerDomainTransferOut: CustomerDomainReasonRequest,
    deleteDomainForwarding: DomainForwardingRequest,
    getDomainForwarding: DomainForwardingRequest,
    updateDomainForwarding: DomainForwardingRequest,
    createDomainForwarding: DomainForwardingRequest,
    listCustomerDomainActions: CustomerDomainRequest,
    cancelCustomerDomainAction: CustomerDomainActionTypeRequest,
    getCustomerDomainAction: CustomerDomainActionTypeRequest,
    getCustomerDomainNotifications: CustomerIdRequest,
    getCustomerDomainNotificationOptIns: CustomerIdRequest,
    updateCustomerDomainNotificationOptIns: CustomerNotificationOptInUpdateRequest,
    getCustomerDomainNotificationSchema: CustomerNotificationSchemaRequest,
    acknowledgeCustomerDomainNotification: CustomerNotificationAckRequest,
    registerCustomerDomain: CustomerRegisterRequest,
    getCustomerDomainRegisterSchema: CustomerRegisterSchemaRequest,
    validateCustomerDomainRegister: CustomerRegisterValidateRequest,
    listDomainMaintenances: DomainsMaintenanceListRequest,
    getDomainMaintenance: DomainMaintenanceRequest,
    getDomainUsage: DomainsUsageRequest,
    updateCustomerDomainContacts: CustomerDomainBodyRequest,
    regenerateCustomerDomainAuthCode: CustomerDomainRequest,
  };

  static responseDtos = {
    list: DomainCollectionResponse,
    getAgreement: DomainAgreementResponse,
    available: DomainAvailabilityResponse,
    availableBulk: DomainBulkAvailabilityResponse,
    contactsValidate: DomainValidationResultResponse,
    purchase: DomainOrderResponse,
    schema: DomainSchemaResponse,
    validate: DomainValidationResultResponse,
    suggest: DomainSuggestionsResponse,
    tlds: DomainTldListResponse,
    cancel: DomainOperationResponse,
    get: DomainDetailsResponse,
    update: DomainOrderResponse,
    updateContacts: DomainOrderResponse,
    cancelPrivacy: DomainOperationResponse,
    purchasePrivacy: DomainOrderResponse,
    recordAdd: DomainRecordListResponse,
    recordReplace: DomainRecordListResponse,
    recordGet: DomainRecordListResponse,
    recordReplaceTypeName: DomainRecordListResponse,
    recordDeleteTypeName: DomainRecordListResponse,
    recordReplaceType: DomainRecordListResponse,
    renew: DomainOrderResponse,
    transferIn: DomainTransferResponse,
    verifyEmail: DomainDetailsResponse,
    getCustomerDomain: DomainDetailsResponse,
    cancelCustomerDomainChangeOfRegistrant: DomainOperationResponse,
    getCustomerDomainChangeOfRegistrant: DomainDetailsResponse,
    addCustomerDomainDnssecRecords: DomainRecordListResponse,
    removeCustomerDomainDnssecRecords: DomainRecordListResponse,
    replaceCustomerDomainNameServers: DomainOrderResponse,
    getCustomerDomainPrivacyForwarding: DomainForwardingResponse,
    updateCustomerDomainPrivacyForwarding: DomainForwardingResponse,
    redeemCustomerDomain: DomainDetailsResponse,
    renewCustomerDomain: DomainOrderResponse,
    transferCustomerDomain: DomainTransferResponse,
    getCustomerDomainTransferStatus: DomainTransferResponse,
    validateCustomerDomainTransfer: DomainValidationResultResponse,
    acceptCustomerDomainTransferIn: DomainTransferResponse,
    cancelCustomerDomainTransferIn: DomainTransferResponse,
    restartCustomerDomainTransferIn: DomainTransferResponse,
    retryCustomerDomainTransferIn: DomainTransferResponse,
    initiateCustomerDomainTransferOut: DomainTransferResponse,
    acceptCustomerDomainTransferOut: DomainTransferResponse,
    rejectCustomerDomainTransferOut: DomainTransferResponse,
    deleteDomainForwarding: DomainForwardingResponse,
    getDomainForwarding: DomainForwardingResponse,
    updateDomainForwarding: DomainForwardingResponse,
    createDomainForwarding: DomainForwardingResponse,
    listCustomerDomainActions: DomainActionCollectionResponse,
    cancelCustomerDomainAction: DomainOperationResponse,
    getCustomerDomainAction: DomainDetailsResponse,
    getCustomerDomainNotifications: DomainNotificationListResponse,
    getCustomerDomainNotificationOptIns: DomainNotificationListResponse,
    updateCustomerDomainNotificationOptIns: DomainNotificationListResponse,
    getCustomerDomainNotificationSchema: DomainNotificationSchemaResponse,
    acknowledgeCustomerDomainNotification: DomainNotificationAckResponse,
    registerCustomerDomain: DomainOrderResponse,
    getCustomerDomainRegisterSchema: DomainSchemaResponse,
    validateCustomerDomainRegister: DomainValidationResultResponse,
    listDomainMaintenances: DomainMaintenanceListResponse,
    getDomainMaintenance: DomainMaintenanceResponse,
    getDomainUsage: DomainUsageResponse,
    updateCustomerDomainContacts: DomainOrderResponse,
    regenerateCustomerDomainAuthCode: DomainDetailsResponse,
  };

  constructor(client) {
    super(client, DomainsService.BASE_URL);
  }

  async list(request = new DomainsListRequest()) {
    const requestDto = DomainsListRequest.from(request);
    const response = await this.call('GET', '/v1/domains', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainCollectionResponse.from(response);
  }

  async getAgreement(request = new DomainsAgreementRequest()) {
    const requestDto = DomainsAgreementRequest.from(request);
    const response = await this.call('GET', '/v1/domains/agreements', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainAgreementResponse.from(response);
  }

  async available(request = new DomainAvailabilityRequest()) {
    const requestDto = DomainAvailabilityRequest.from(request);
    const response = await this.call('GET', '/v1/domains/available', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainAvailabilityResponse.from(response);
  }

  async availableBulk(request = new DomainAvailabilityBulkRequest()) {
    const requestDto = DomainAvailabilityBulkRequest.from(request);
    const response = await this.call('POST', '/v1/domains/available', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainBulkAvailabilityResponse.from(response);
  }

  async contactsValidate(request = new DomainContactsValidateRequest()) {
    const requestDto = DomainContactsValidateRequest.from(request);
    const response = await this.call('POST', '/v1/domains/contacts/validate', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainValidationResultResponse.from(response);
  }

  async purchase(request = new DomainPurchaseRequest()) {
    const requestDto = DomainPurchaseRequest.from(request);
    const response = await this.call('POST', '/v1/domains/purchase', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async schema(request = new DomainSchemaRequest()) {
    const requestDto = DomainSchemaRequest.from(request);
    const response = await this.call('GET', '/v1/domains/purchase/schema/{tld}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainSchemaResponse.from(response);
  }

  async validate(request = new DomainValidateRequest()) {
    const requestDto = DomainValidateRequest.from(request);
    const response = await this.call('POST', '/v1/domains/purchase/validate', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainValidationResultResponse.from(response);
  }

  async suggest(request = new DomainSuggestRequest()) {
    const requestDto = DomainSuggestRequest.from(request);
    const response = await this.call('GET', '/v1/domains/suggest', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainSuggestionsResponse.from(response);
  }

  async tlds(request = new DomainsTldsRequest()) {
    const requestDto = DomainsTldsRequest.from(request);
    const response = await this.call('GET', '/v1/domains/tlds', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTldListResponse.from(response);
  }

  async cancel(request = new DomainPathRequest()) {
    const requestDto = DomainPathRequest.from(request);
    const response = await this.call('DELETE', '/v1/domains/{domain}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOperationResponse.from(response);
  }

  async get(request = new DomainPathRequest()) {
    const requestDto = DomainPathRequest.from(request);
    const response = await this.call('GET', '/v1/domains/{domain}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async update(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v1/domains/{domain}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async updateContacts(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v1/domains/{domain}/contacts', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async cancelPrivacy(request = new DomainPathRequest()) {
    const requestDto = DomainPathRequest.from(request);
    const response = await this.call('DELETE', '/v1/domains/{domain}/privacy', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOperationResponse.from(response);
  }

  async purchasePrivacy(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('POST', '/v1/domains/{domain}/privacy/purchase', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async recordAdd(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v1/domains/{domain}/records', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async recordReplace(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('PUT', '/v1/domains/{domain}/records', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async recordGet(request = new DomainTypeNameLookupRequest()) {
    const requestDto = DomainTypeNameLookupRequest.from(request);
    const response = await this.call('GET', '/v1/domains/{domain}/records/{type}/{name}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async recordReplaceTypeName(request = new DomainTypeNameBodyRequest()) {
    const requestDto = DomainTypeNameBodyRequest.from(request);
    const response = await this.call('PUT', '/v1/domains/{domain}/records/{type}/{name}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async recordDeleteTypeName(request = new DomainTypeNameLookupRequest()) {
    const requestDto = DomainTypeNameLookupRequest.from(request);
    const response = await this.call('DELETE', '/v1/domains/{domain}/records/{type}/{name}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async recordReplaceType(request = new DomainTypeBodyRequest()) {
    const requestDto = DomainTypeBodyRequest.from(request);
    const response = await this.call('PUT', '/v1/domains/{domain}/records/{type}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async renew(request = new DomainRenewRequest()) {
    const requestDto = DomainRenewRequest.from(request);
    const response = await this.call('POST', '/v1/domains/{domain}/renew', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async transferIn(request = new DomainBodyRequest()) {
    const requestDto = DomainBodyRequest.from(request);
    const response = await this.call('POST', '/v1/domains/{domain}/transfer', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async verifyEmail(request = new DomainPathRequest()) {
    const requestDto = DomainPathRequest.from(request);
    const response = await this.call('POST', '/v1/domains/{domain}/verifyRegistrantEmail', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async getCustomerDomain(request = new CustomerDomainIncludesRequest()) {
    const requestDto = CustomerDomainIncludesRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async cancelCustomerDomainChangeOfRegistrant(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/changeOfRegistrant', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOperationResponse.from(response);
  }

  async getCustomerDomainChangeOfRegistrant(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}/changeOfRegistrant', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async addCustomerDomainDnssecRecords(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/dnssecRecords', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async removeCustomerDomainDnssecRecords(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/dnssecRecords', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainRecordListResponse.from(response);
  }

  async replaceCustomerDomainNameServers(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('PUT', '/v2/customers/{customerId}/domains/{domain}/nameServers', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async getCustomerDomainPrivacyForwarding(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}/privacy/forwarding', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async updateCustomerDomainPrivacyForwarding(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/privacy/forwarding', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async redeemCustomerDomain(request = new CustomerDomainOptionalBodyRequest()) {
    const requestDto = CustomerDomainOptionalBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/redeem', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async renewCustomerDomain(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/renew', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async transferCustomerDomain(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transfer', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async getCustomerDomainTransferStatus(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}/transfer', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async validateCustomerDomainTransfer(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transfer/validate', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainValidationResultResponse.from(response);
  }

  async acceptCustomerDomainTransferIn(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInAccept', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async cancelCustomerDomainTransferIn(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInCancel', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async restartCustomerDomainTransferIn(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInRestart', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async retryCustomerDomainTransferIn(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferInRetry', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async initiateCustomerDomainTransferOut(request = new CustomerDomainRegistrarRequest()) {
    const requestDto = CustomerDomainRegistrarRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOut', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async acceptCustomerDomainTransferOut(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOutAccept', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async rejectCustomerDomainTransferOut(request = new CustomerDomainReasonRequest()) {
    const requestDto = CustomerDomainReasonRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/transferOutReject', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainTransferResponse.from(response);
  }

  async deleteDomainForwarding(request = new DomainForwardingRequest()) {
    const requestDto = DomainForwardingRequest.from(request);
    const response = await this.call('DELETE', '/v2/customers/{customerId}/domains/forwards/{fqdn}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async getDomainForwarding(request = new DomainForwardingRequest()) {
    const requestDto = DomainForwardingRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/forwards/{fqdn}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async updateDomainForwarding(request = new DomainForwardingRequest()) {
    const requestDto = DomainForwardingRequest.from(request);
    const response = await this.call('PUT', '/v2/customers/{customerId}/domains/forwards/{fqdn}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async createDomainForwarding(request = new DomainForwardingRequest()) {
    const requestDto = DomainForwardingRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/forwards/{fqdn}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainForwardingResponse.from(response);
  }

  async listCustomerDomainActions(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}/actions', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainActionCollectionResponse.from(response);
  }

  async cancelCustomerDomainAction(request = new CustomerDomainActionTypeRequest()) {
    const requestDto = CustomerDomainActionTypeRequest.from(request);
    const response = await this.call('DELETE', '/v2/customers/{customerId}/domains/{domain}/actions/{type}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOperationResponse.from(response);
  }

  async getCustomerDomainAction(request = new CustomerDomainActionTypeRequest()) {
    const requestDto = CustomerDomainActionTypeRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/{domain}/actions/{type}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }

  async getCustomerDomainNotifications(request = new CustomerIdRequest()) {
    const requestDto = CustomerIdRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/notifications', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainNotificationListResponse.from(response);
  }

  async getCustomerDomainNotificationOptIns(request = new CustomerIdRequest()) {
    const requestDto = CustomerIdRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/notifications/optIn', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainNotificationListResponse.from(response);
  }

  async updateCustomerDomainNotificationOptIns(request = new CustomerNotificationOptInUpdateRequest()) {
    const requestDto = CustomerNotificationOptInUpdateRequest.from(request);
    const response = await this.call('PUT', '/v2/customers/{customerId}/domains/notifications/optIn', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainNotificationListResponse.from(response);
  }

  async getCustomerDomainNotificationSchema(request = new CustomerNotificationSchemaRequest()) {
    const requestDto = CustomerNotificationSchemaRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/notifications/schemas/{type}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainNotificationSchemaResponse.from(response);
  }

  async acknowledgeCustomerDomainNotification(request = new CustomerNotificationAckRequest()) {
    const requestDto = CustomerNotificationAckRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainNotificationAckResponse.from(response);
  }

  async registerCustomerDomain(request = new CustomerRegisterRequest()) {
    const requestDto = CustomerRegisterRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/register', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async getCustomerDomainRegisterSchema(request = new CustomerRegisterSchemaRequest()) {
    const requestDto = CustomerRegisterSchemaRequest.from(request);
    const response = await this.call('GET', '/v2/customers/{customerId}/domains/register/schema/{tld}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainSchemaResponse.from(response);
  }

  async validateCustomerDomainRegister(request = new CustomerRegisterValidateRequest()) {
    const requestDto = CustomerRegisterValidateRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/register/validate', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainValidationResultResponse.from(response);
  }

  async listDomainMaintenances(request = new DomainsMaintenanceListRequest()) {
    const requestDto = DomainsMaintenanceListRequest.from(request);
    const response = await this.call('GET', '/v2/domains/maintenances', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainMaintenanceListResponse.from(response);
  }

  async getDomainMaintenance(request = new DomainMaintenanceRequest()) {
    const requestDto = DomainMaintenanceRequest.from(request);
    const response = await this.call('GET', '/v2/domains/maintenances/{maintenanceId}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainMaintenanceResponse.from(response);
  }

  async getDomainUsage(request = new DomainsUsageRequest()) {
    const requestDto = DomainsUsageRequest.from(request);
    const response = await this.call('GET', '/v2/domains/usage/{yyyymm}', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainUsageResponse.from(response);
  }

  async updateCustomerDomainContacts(request = new CustomerDomainBodyRequest()) {
    const requestDto = CustomerDomainBodyRequest.from(request);
    const response = await this.call('PATCH', '/v2/customers/{customerId}/domains/{domain}/contacts', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainOrderResponse.from(response);
  }

  async regenerateCustomerDomainAuthCode(request = new CustomerDomainRequest()) {
    const requestDto = CustomerDomainRequest.from(request);
    const response = await this.call('POST', '/v2/customers/{customerId}/domains/{domain}/regenerateAuthCode', {
      pathParams: requestDto.toPathParams(),
      queryParams: requestDto.toQueryParams(),
      headers: requestDto.toHeaders(),
      body: requestDto.toBody(),
      multipart: requestDto.isMultipart()
    });

    return DomainDetailsResponse.from(response);
  }
}
