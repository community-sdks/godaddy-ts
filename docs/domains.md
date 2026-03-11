# Domains Service

Client accessor: `client.domains()`

## Method Index

- [`list`](#list): `DomainCollectionResponse`
- [`getAgreement`](#getagreement): `DomainAgreementResponse`
- [`available`](#available): `DomainAvailabilityResponse`
- [`availableBulk`](#availablebulk): `DomainBulkAvailabilityResponse`
- [`contactsValidate`](#contactsvalidate): `DomainValidationResultResponse`
- [`purchase`](#purchase): `DomainOrderResponse`
- [`schema`](#schema): `DomainSchemaResponse`
- [`validate`](#validate): `DomainValidationResultResponse`
- [`suggest`](#suggest): `DomainSuggestionsResponse`
- [`tlds`](#tlds): `DomainTldListResponse`
- [`cancel`](#cancel): `DomainOperationResponse`
- [`get`](#get): `DomainDetailsResponse`
- [`update`](#update): `DomainOrderResponse`
- [`updateContacts`](#updatecontacts): `DomainOrderResponse`
- [`cancelPrivacy`](#cancelprivacy): `DomainOperationResponse`
- [`purchasePrivacy`](#purchaseprivacy): `DomainOrderResponse`
- [`recordAdd`](#recordadd): `DomainRecordListResponse`
- [`recordReplace`](#recordreplace): `DomainRecordListResponse`
- [`recordGet`](#recordget): `DomainRecordListResponse`
- [`recordReplaceTypeName`](#recordreplacetypename): `DomainRecordListResponse`
- [`recordDeleteTypeName`](#recorddeletetypename): `DomainRecordListResponse`
- [`recordReplaceType`](#recordreplacetype): `DomainRecordListResponse`
- [`renew`](#renew): `DomainOrderResponse`
- [`transferIn`](#transferin): `DomainTransferResponse`
- [`verifyEmail`](#verifyemail): `DomainDetailsResponse`
- [`getCustomerDomain`](#getcustomerdomain): `DomainDetailsResponse`
- [`cancelCustomerDomainChangeOfRegistrant`](#cancelcustomerdomainchangeofregistrant): `DomainOperationResponse`
- [`getCustomerDomainChangeOfRegistrant`](#getcustomerdomainchangeofregistrant): `DomainDetailsResponse`
- [`addCustomerDomainDnssecRecords`](#addcustomerdomaindnssecrecords): `DomainRecordListResponse`
- [`removeCustomerDomainDnssecRecords`](#removecustomerdomaindnssecrecords): `DomainRecordListResponse`
- [`replaceCustomerDomainNameServers`](#replacecustomerdomainnameservers): `DomainOrderResponse`
- [`getCustomerDomainPrivacyForwarding`](#getcustomerdomainprivacyforwarding): `DomainForwardingResponse`
- [`updateCustomerDomainPrivacyForwarding`](#updatecustomerdomainprivacyforwarding): `DomainForwardingResponse`
- [`redeemCustomerDomain`](#redeemcustomerdomain): `DomainDetailsResponse`
- [`renewCustomerDomain`](#renewcustomerdomain): `DomainOrderResponse`
- [`transferCustomerDomain`](#transfercustomerdomain): `DomainTransferResponse`
- [`getCustomerDomainTransferStatus`](#getcustomerdomaintransferstatus): `DomainTransferResponse`
- [`validateCustomerDomainTransfer`](#validatecustomerdomaintransfer): `DomainValidationResultResponse`
- [`acceptCustomerDomainTransferIn`](#acceptcustomerdomaintransferin): `DomainTransferResponse`
- [`cancelCustomerDomainTransferIn`](#cancelcustomerdomaintransferin): `DomainTransferResponse`
- [`restartCustomerDomainTransferIn`](#restartcustomerdomaintransferin): `DomainTransferResponse`
- [`retryCustomerDomainTransferIn`](#retrycustomerdomaintransferin): `DomainTransferResponse`
- [`initiateCustomerDomainTransferOut`](#initiatecustomerdomaintransferout): `DomainTransferResponse`
- [`acceptCustomerDomainTransferOut`](#acceptcustomerdomaintransferout): `DomainTransferResponse`
- [`rejectCustomerDomainTransferOut`](#rejectcustomerdomaintransferout): `DomainTransferResponse`
- [`deleteDomainForwarding`](#deletedomainforwarding): `DomainForwardingResponse`
- [`getDomainForwarding`](#getdomainforwarding): `DomainForwardingResponse`
- [`updateDomainForwarding`](#updatedomainforwarding): `DomainForwardingResponse`
- [`createDomainForwarding`](#createdomainforwarding): `DomainForwardingResponse`
- [`listCustomerDomainActions`](#listcustomerdomainactions): `DomainActionCollectionResponse`
- [`cancelCustomerDomainAction`](#cancelcustomerdomainaction): `DomainOperationResponse`
- [`getCustomerDomainAction`](#getcustomerdomainaction): `DomainDetailsResponse`
- [`getCustomerDomainNotifications`](#getcustomerdomainnotifications): `DomainNotificationListResponse`
- [`getCustomerDomainNotificationOptIns`](#getcustomerdomainnotificationoptins): `DomainNotificationListResponse`
- [`updateCustomerDomainNotificationOptIns`](#updatecustomerdomainnotificationoptins): `DomainNotificationListResponse`
- [`getCustomerDomainNotificationSchema`](#getcustomerdomainnotificationschema): `DomainNotificationSchemaResponse`
- [`acknowledgeCustomerDomainNotification`](#acknowledgecustomerdomainnotification): `DomainNotificationAckResponse`
- [`registerCustomerDomain`](#registercustomerdomain): `DomainOrderResponse`
- [`getCustomerDomainRegisterSchema`](#getcustomerdomainregisterschema): `DomainSchemaResponse`
- [`validateCustomerDomainRegister`](#validatecustomerdomainregister): `DomainValidationResultResponse`
- [`listDomainMaintenances`](#listdomainmaintenances): `DomainMaintenanceListResponse`
- [`getDomainMaintenance`](#getdomainmaintenance): `DomainMaintenanceResponse`
- [`getDomainUsage`](#getdomainusage): `DomainUsageResponse`
- [`updateCustomerDomainContacts`](#updatecustomerdomaincontacts): `DomainOrderResponse`
- [`regenerateCustomerDomainAuthCode`](#regeneratecustomerdomainauthcode): `DomainDetailsResponse`

## Methods

### list

Returns: `DomainCollectionResponse`

Request code:

```ts
import { Client, Config, DomainsListRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().list(new DomainsListRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### getAgreement

Returns: `DomainAgreementResponse`

Request code:

```ts
import { Client, Config, DomainsAgreementRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getAgreement(new DomainsAgreementRequest());
```

Response JSON example:

```json
{
  "agreements": [
    {
      "agreementKey": "DNRA",
      "title": "Domain Name Registration Agreement",
      "url": "https://www.godaddy.com/legal/agreements/domain-registration"
    }
  ]
}
```

### available

Returns: `DomainAvailabilityResponse`

Request code:

```ts
import { Client, Config, DomainAvailabilityRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().available(new DomainAvailabilityRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "available": true,
  "price": 1999,
  "currency": "USD",
  "definitive": true,
  "period": 1
}
```

### availableBulk

Returns: `DomainBulkAvailabilityResponse`

Request code:

```ts
import { Client, Config, DomainAvailabilityBulkRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().availableBulk(new DomainAvailabilityBulkRequest());
```

Response JSON example:

```json
{
  "domains": [
    {
      "domain": "example.com",
      "available": true,
      "price": 1999,
      "currency": "USD"
    }
  ]
}
```

### contactsValidate

Returns: `DomainValidationResultResponse`

Request code:

```ts
import { Client, Config, DomainContactsValidateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().contactsValidate(new DomainContactsValidateRequest());
```

Response JSON example:

```json
{
  "valid": false,
  "errors": [
    {
      "path": "domain",
      "message": "Domain is invalid"
    }
  ]
}
```

### purchase

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, DomainPurchaseRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().purchase(new DomainPurchaseRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### schema

Returns: `DomainSchemaResponse`

Request code:

```ts
import { Client, Config, DomainSchemaRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().schema(new DomainSchemaRequest());
```

Response JSON example:

```json
{
  "fields": [
    {
      "path": "consent.agreementKeys",
      "type": "array",
      "required": true
    }
  ]
}
```

### validate

Returns: `DomainValidationResultResponse`

Request code:

```ts
import { Client, Config, DomainValidateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().validate(new DomainValidateRequest());
```

Response JSON example:

```json
{
  "valid": false,
  "errors": [
    {
      "path": "domain",
      "message": "Domain is invalid"
    }
  ]
}
```

### suggest

Returns: `DomainSuggestionsResponse`

Request code:

```ts
import { Client, Config, DomainSuggestRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().suggest(new DomainSuggestRequest());
```

Response JSON example:

```json
[
  "example.com",
  "example.net"
]
```

### tlds

Returns: `DomainTldListResponse`

Request code:

```ts
import { Client, Config, DomainsTldsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().tlds(new DomainsTldsRequest());
```

Response JSON example:

```json
{
  "tld": "com",
  "type": "GENERIC",
  "isIdn": false
}
```

### cancel

Returns: `DomainOperationResponse`

Request code:

```ts
import { Client, Config, DomainPathRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().cancel(new DomainPathRequest());
```

Response JSON example:

```json
{
  "success": true
}
```

### get

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, DomainPathRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().get(new DomainPathRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### update

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().update(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### updateContacts

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().updateContacts(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### cancelPrivacy

Returns: `DomainOperationResponse`

Request code:

```ts
import { Client, Config, DomainPathRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().cancelPrivacy(new DomainPathRequest());
```

Response JSON example:

```json
{
  "success": true
}
```

### purchasePrivacy

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().purchasePrivacy(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### recordAdd

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordAdd(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### recordReplace

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordReplace(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### recordGet

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainTypeNameLookupRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordGet(new DomainTypeNameLookupRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### recordReplaceTypeName

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainTypeNameBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordReplaceTypeName(new DomainTypeNameBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### recordDeleteTypeName

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainTypeNameLookupRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordDeleteTypeName(new DomainTypeNameLookupRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### recordReplaceType

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, DomainTypeBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().recordReplaceType(new DomainTypeBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### renew

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, DomainRenewRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().renew(new DomainRenewRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### transferIn

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, DomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().transferIn(new DomainBodyRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### verifyEmail

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, DomainPathRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().verifyEmail(new DomainPathRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### getCustomerDomain

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, CustomerDomainIncludesRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomain(new CustomerDomainIncludesRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### cancelCustomerDomainChangeOfRegistrant

Returns: `DomainOperationResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().cancelCustomerDomainChangeOfRegistrant(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "success": true
}
```

### getCustomerDomainChangeOfRegistrant

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainChangeOfRegistrant(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### addCustomerDomainDnssecRecords

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().addCustomerDomainDnssecRecords(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### removeCustomerDomainDnssecRecords

Returns: `DomainRecordListResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().removeCustomerDomainDnssecRecords(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "type": "A",
  "name": "@",
  "data": "203.0.113.10",
  "ttl": 600
}
```

### replaceCustomerDomainNameServers

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().replaceCustomerDomainNameServers(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### getCustomerDomainPrivacyForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainPrivacyForwarding(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### updateCustomerDomainPrivacyForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().updateCustomerDomainPrivacyForwarding(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### redeemCustomerDomain

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, CustomerDomainOptionalBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().redeemCustomerDomain(new CustomerDomainOptionalBodyRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### renewCustomerDomain

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().renewCustomerDomain(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### transferCustomerDomain

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().transferCustomerDomain(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### getCustomerDomainTransferStatus

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainTransferStatus(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### validateCustomerDomainTransfer

Returns: `DomainValidationResultResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().validateCustomerDomainTransfer(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "valid": false,
  "errors": [
    {
      "path": "domain",
      "message": "Domain is invalid"
    }
  ]
}
```

### acceptCustomerDomainTransferIn

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().acceptCustomerDomainTransferIn(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### cancelCustomerDomainTransferIn

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().cancelCustomerDomainTransferIn(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### restartCustomerDomainTransferIn

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().restartCustomerDomainTransferIn(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### retryCustomerDomainTransferIn

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().retryCustomerDomainTransferIn(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### initiateCustomerDomainTransferOut

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRegistrarRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().initiateCustomerDomainTransferOut(new CustomerDomainRegistrarRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### acceptCustomerDomainTransferOut

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().acceptCustomerDomainTransferOut(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### rejectCustomerDomainTransferOut

Returns: `DomainTransferResponse`

Request code:

```ts
import { Client, Config, CustomerDomainReasonRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().rejectCustomerDomainTransferOut(new CustomerDomainReasonRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "transferStatus": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### deleteDomainForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, DomainForwardingRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().deleteDomainForwarding(new DomainForwardingRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### getDomainForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, DomainForwardingRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getDomainForwarding(new DomainForwardingRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### updateDomainForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, DomainForwardingRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().updateDomainForwarding(new DomainForwardingRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### createDomainForwarding

Returns: `DomainForwardingResponse`

Request code:

```ts
import { Client, Config, DomainForwardingRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().createDomainForwarding(new DomainForwardingRequest());
```

Response JSON example:

```json
{
  "fqdn": "example.com",
  "type": "PERMANENT",
  "to": "https://www.example.com"
}
```

### listCustomerDomainActions

Returns: `DomainActionCollectionResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().listCustomerDomainActions(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "actionType": "CHANGE_OF_REGISTRANT",
  "status": "PENDING",
  "createdAt": "2026-03-11T12:00:00Z",
  "domain": "example.com"
}
```

### cancelCustomerDomainAction

Returns: `DomainOperationResponse`

Request code:

```ts
import { Client, Config, CustomerDomainActionTypeRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().cancelCustomerDomainAction(new CustomerDomainActionTypeRequest());
```

Response JSON example:

```json
{
  "success": true
}
```

### getCustomerDomainAction

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, CustomerDomainActionTypeRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainAction(new CustomerDomainActionTypeRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

### getCustomerDomainNotifications

Returns: `DomainNotificationListResponse`

Request code:

```ts
import { Client, Config, CustomerIdRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainNotifications(new CustomerIdRequest());
```

Response JSON example:

```json
{
  "type": "EXPIRATION",
  "optedIn": true
}
```

### getCustomerDomainNotificationOptIns

Returns: `DomainNotificationListResponse`

Request code:

```ts
import { Client, Config, CustomerIdRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainNotificationOptIns(new CustomerIdRequest());
```

Response JSON example:

```json
{
  "type": "EXPIRATION",
  "optedIn": true
}
```

### updateCustomerDomainNotificationOptIns

Returns: `DomainNotificationListResponse`

Request code:

```ts
import { Client, Config, CustomerNotificationOptInUpdateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().updateCustomerDomainNotificationOptIns(new CustomerNotificationOptInUpdateRequest());
```

Response JSON example:

```json
{
  "type": "EXPIRATION",
  "optedIn": true
}
```

### getCustomerDomainNotificationSchema

Returns: `DomainNotificationSchemaResponse`

Request code:

```ts
import { Client, Config, CustomerNotificationSchemaRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainNotificationSchema(new CustomerNotificationSchemaRequest());
```

Response JSON example:

```json
{
  "fields": [
    {
      "path": "type",
      "type": "string",
      "required": true
    }
  ]
}
```

### acknowledgeCustomerDomainNotification

Returns: `DomainNotificationAckResponse`

Request code:

```ts
import { Client, Config, CustomerNotificationAckRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().acknowledgeCustomerDomainNotification(new CustomerNotificationAckRequest());
```

Response JSON example:

```json
{
  "notificationId": "notif_1",
  "acknowledged": true,
  "acknowledgedAt": "2026-03-11T12:00:00Z"
}
```

### registerCustomerDomain

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, CustomerRegisterRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().registerCustomerDomain(new CustomerRegisterRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### getCustomerDomainRegisterSchema

Returns: `DomainSchemaResponse`

Request code:

```ts
import { Client, Config, CustomerRegisterSchemaRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getCustomerDomainRegisterSchema(new CustomerRegisterSchemaRequest());
```

Response JSON example:

```json
{
  "fields": [
    {
      "path": "consent.agreementKeys",
      "type": "array",
      "required": true
    }
  ]
}
```

### validateCustomerDomainRegister

Returns: `DomainValidationResultResponse`

Request code:

```ts
import { Client, Config, CustomerRegisterValidateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().validateCustomerDomainRegister(new CustomerRegisterValidateRequest());
```

Response JSON example:

```json
{
  "valid": false,
  "errors": [
    {
      "path": "domain",
      "message": "Domain is invalid"
    }
  ]
}
```

### listDomainMaintenances

Returns: `DomainMaintenanceListResponse`

Request code:

```ts
import { Client, Config, DomainsMaintenanceListRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().listDomainMaintenances(new DomainsMaintenanceListRequest());
```

Response JSON example:

```json
{
  "maintenanceId": "mnt_1",
  "status": "SCHEDULED",
  "startsAt": "2026-03-20T00:00:00Z",
  "endsAt": "2026-03-20T02:00:00Z"
}
```

### getDomainMaintenance

Returns: `DomainMaintenanceResponse`

Request code:

```ts
import { Client, Config, DomainMaintenanceRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getDomainMaintenance(new DomainMaintenanceRequest());
```

Response JSON example:

```json
{
  "maintenanceId": "mnt_1",
  "status": "SCHEDULED",
  "startsAt": "2026-03-20T00:00:00Z",
  "endsAt": "2026-03-20T02:00:00Z"
}
```

### getDomainUsage

Returns: `DomainUsageResponse`

Request code:

```ts
import { Client, Config, DomainsUsageRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().getDomainUsage(new DomainsUsageRequest());
```

Response JSON example:

```json
{
  "month": "202603",
  "domainsUnderManagement": 120,
  "domainAdds": 10,
  "domainTransfersIn": 3
}
```

### updateCustomerDomainContacts

Returns: `DomainOrderResponse`

Request code:

```ts
import { Client, Config, CustomerDomainBodyRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().updateCustomerDomainContacts(new CustomerDomainBodyRequest());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "status": "PENDING",
  "submittedAt": "2026-03-11T12:00:00Z"
}
```

### regenerateCustomerDomainAuthCode

Returns: `DomainDetailsResponse`

Request code:

```ts
import { Client, Config, CustomerDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.domains().regenerateCustomerDomainAuthCode(new CustomerDomainRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "status": "ACTIVE",
  "expires": "2027-03-11T00:00:00Z",
  "authCode": "AUTHCODE"
}
```

## Exceptions

Service-specific exceptions are under `src/errors/domains/*` and expose `getErrorResponse()`.
