# Domains Service

Client accessor: `client.domains()`

## Method Index

- `list`: `DomainsListRequest` -> `DomainCollectionResponse`
- `getAgreement`: `DomainsAgreementRequest` -> `DomainAgreementResponse`
- `available`: `DomainAvailabilityRequest` -> `DomainAvailabilityResponse`
- `availableBulk`: `DomainAvailabilityBulkRequest` -> `DomainBulkAvailabilityResponse`
- `contactsValidate`: `DomainContactsValidateRequest` -> `DomainValidationResultResponse`
- `purchase`: `DomainPurchaseRequest` -> `DomainOrderResponse`
- `schema`: `DomainSchemaRequest` -> `DomainSchemaResponse`
- `validate`: `DomainValidateRequest` -> `DomainValidationResultResponse`
- `suggest`: `DomainSuggestRequest` -> `DomainSuggestionsResponse`
- `tlds`: `DomainsTldsRequest` -> `DomainTldListResponse`
- `cancel`: `DomainPathRequest` -> `DomainOperationResponse`
- `get`: `DomainPathRequest` -> `DomainDetailsResponse`
- `update`: `DomainBodyRequest` -> `DomainOrderResponse`
- `updateContacts`: `DomainBodyRequest` -> `DomainOrderResponse`
- `cancelPrivacy`: `DomainPathRequest` -> `DomainOperationResponse`
- `purchasePrivacy`: `DomainBodyRequest` -> `DomainOrderResponse`
- `recordAdd`: `DomainBodyRequest` -> `DomainRecordListResponse`
- `recordReplace`: `DomainBodyRequest` -> `DomainRecordListResponse`
- `recordGet`: `DomainTypeNameLookupRequest` -> `DomainRecordListResponse`
- `recordReplaceTypeName`: `DomainTypeNameBodyRequest` -> `DomainRecordListResponse`
- `recordDeleteTypeName`: `DomainTypeNameLookupRequest` -> `DomainRecordListResponse`
- `recordReplaceType`: `DomainTypeBodyRequest` -> `DomainRecordListResponse`
- `renew`: `DomainRenewRequest` -> `DomainOrderResponse`
- `transferIn`: `DomainBodyRequest` -> `DomainTransferResponse`
- `verifyEmail`: `DomainPathRequest` -> `DomainDetailsResponse`
- `getCustomerDomain`: `CustomerDomainIncludesRequest` -> `DomainDetailsResponse`
- `cancelCustomerDomainChangeOfRegistrant`: `CustomerDomainRequest` -> `DomainOperationResponse`
- `getCustomerDomainChangeOfRegistrant`: `CustomerDomainRequest` -> `DomainDetailsResponse`
- `addCustomerDomainDnssecRecords`: `CustomerDomainBodyRequest` -> `DomainRecordListResponse`
- `removeCustomerDomainDnssecRecords`: `CustomerDomainBodyRequest` -> `DomainRecordListResponse`
- `replaceCustomerDomainNameServers`: `CustomerDomainBodyRequest` -> `DomainOrderResponse`
- `getCustomerDomainPrivacyForwarding`: `CustomerDomainRequest` -> `DomainForwardingResponse`
- `updateCustomerDomainPrivacyForwarding`: `CustomerDomainBodyRequest` -> `DomainForwardingResponse`
- `redeemCustomerDomain`: `CustomerDomainOptionalBodyRequest` -> `DomainDetailsResponse`
- `renewCustomerDomain`: `CustomerDomainBodyRequest` -> `DomainOrderResponse`
- `transferCustomerDomain`: `CustomerDomainBodyRequest` -> `DomainTransferResponse`
- `getCustomerDomainTransferStatus`: `CustomerDomainRequest` -> `DomainTransferResponse`
- `validateCustomerDomainTransfer`: `CustomerDomainBodyRequest` -> `DomainValidationResultResponse`
- `acceptCustomerDomainTransferIn`: `CustomerDomainBodyRequest` -> `DomainTransferResponse`
- `cancelCustomerDomainTransferIn`: `CustomerDomainRequest` -> `DomainTransferResponse`
- `restartCustomerDomainTransferIn`: `CustomerDomainRequest` -> `DomainTransferResponse`
- `retryCustomerDomainTransferIn`: `CustomerDomainBodyRequest` -> `DomainTransferResponse`
- `initiateCustomerDomainTransferOut`: `CustomerDomainRegistrarRequest` -> `DomainTransferResponse`
- `acceptCustomerDomainTransferOut`: `CustomerDomainRequest` -> `DomainTransferResponse`
- `rejectCustomerDomainTransferOut`: `CustomerDomainReasonRequest` -> `DomainTransferResponse`
- `deleteDomainForwarding`: `DomainForwardingRequest` -> `DomainForwardingResponse`
- `getDomainForwarding`: `DomainForwardingRequest` -> `DomainForwardingResponse`
- `updateDomainForwarding`: `DomainForwardingRequest` -> `DomainForwardingResponse`
- `createDomainForwarding`: `DomainForwardingRequest` -> `DomainForwardingResponse`
- `listCustomerDomainActions`: `CustomerDomainRequest` -> `DomainActionCollectionResponse`
- `cancelCustomerDomainAction`: `CustomerDomainActionTypeRequest` -> `DomainOperationResponse`
- `getCustomerDomainAction`: `CustomerDomainActionTypeRequest` -> `DomainDetailsResponse`
- `getCustomerDomainNotifications`: `CustomerIdRequest` -> `DomainNotificationListResponse`
- `getCustomerDomainNotificationOptIns`: `CustomerIdRequest` -> `DomainNotificationListResponse`
- `updateCustomerDomainNotificationOptIns`: `CustomerNotificationOptInUpdateRequest` -> `DomainNotificationListResponse`
- `getCustomerDomainNotificationSchema`: `CustomerNotificationSchemaRequest` -> `DomainNotificationSchemaResponse`
- `acknowledgeCustomerDomainNotification`: `CustomerNotificationAckRequest` -> `DomainNotificationAckResponse`
- `registerCustomerDomain`: `CustomerRegisterRequest` -> `DomainOrderResponse`
- `getCustomerDomainRegisterSchema`: `CustomerRegisterSchemaRequest` -> `DomainSchemaResponse`
- `validateCustomerDomainRegister`: `CustomerRegisterValidateRequest` -> `DomainValidationResultResponse`
- `listDomainMaintenances`: `DomainsMaintenanceListRequest` -> `DomainMaintenanceListResponse`
- `getDomainMaintenance`: `DomainMaintenanceRequest` -> `DomainMaintenanceResponse`
- `getDomainUsage`: `DomainsUsageRequest` -> `DomainUsageResponse`
- `updateCustomerDomainContacts`: `CustomerDomainBodyRequest` -> `DomainOrderResponse`
- `regenerateCustomerDomainAuthCode`: `CustomerDomainRequest` -> `DomainDetailsResponse`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { DomainsListRequest } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().list(new DomainsListRequest());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
