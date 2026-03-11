# Certificates Service

Client accessor: `client.certificates()`

## Method Index

- [`create`](#create): `CertificateIdentifierResponse`
- [`validate`](#validate): `CertificateValidationResponse`
- [`get`](#get): `CertificateIdentifierResponse`
- [`listActions`](#listactions): `CertificateActionListResponse`
- [`resendEmail`](#resendemail): `CertificateIdentifierResponse`
- [`addAlternateEmailAddress`](#addalternateemailaddress): `CertificateIdentifierResponse`
- [`resendEmailToAddress`](#resendemailtoaddress): `CertificateIdentifierResponse`
- [`getEmailHistory`](#getemailhistory): `CertificateEmailHistoryResponse`
- [`deleteCallback`](#deletecallback): `CertificateCallbackResponse`
- [`getCallback`](#getcallback): `CertificateCallbackResponse`
- [`replaceCallback`](#replacecallback): `CertificateCallbackResponse`
- [`cancel`](#cancel): `CertificateIdentifierResponse`
- [`download`](#download): `CertificateBundleResponse`
- [`reissue`](#reissue): `CertificateIdentifierResponse`
- [`renew`](#renew): `CertificateIdentifierResponse`
- [`revoke`](#revoke): `CertificateIdentifierResponse`
- [`getSiteSeal`](#getsiteseal): `CertificateSiteSealResponse`
- [`verifyDomainControl`](#verifydomaincontrol): `CertificateIdentifierResponse`
- [`getByEntitlement`](#getbyentitlement): `CertificateCollectionResponse`
- [`createForEntitlement`](#createforentitlement): `CertificateIdentifierResponse`
- [`downloadByEntitlement`](#downloadbyentitlement): `CertificateBundleResponse`
- [`listCustomerCertificates`](#listcustomercertificates): `CertificateCollectionResponse`
- [`getCustomerCertificate`](#getcustomercertificate): `CertificateIdentifierResponse`
- [`listDomainVerifications`](#listdomainverifications): `CertificateCollectionResponse`
- [`getDomainVerificationDetails`](#getdomainverificationdetails): `CertificateDomainVerificationResponse`
- [`getAcmeExternalAccountBinding`](#getacmeexternalaccountbinding): `CertificateAcmeExternalAccountBindingResponse`
- [`searchSubscriptionsByDomain`](#searchsubscriptionsbydomain): `CertificateCollectionResponse`
- [`listSubscriptionCertificates`](#listsubscriptioncertificates): `CertificateCollectionResponse`

## Methods

### create

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, CreateCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().create(new CreateCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### validate

Returns: `CertificateValidationResponse`

Request code:

```ts
import { Client, Config, ValidateCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().validate(new ValidateCertificateRequest());
```

Response JSON example:

```json
{
  "valid": false,
  "issues": [
    {
      "path": "dnsNames[0]",
      "message": "SAN entry is invalid"
    }
  ]
}
```

### get

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, GetCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().get(new GetCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### listActions

Returns: `CertificateActionListResponse`

Request code:

```ts
import { Client, Config, ListCertificateActionsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().listActions(new ListCertificateActionsRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "ISSUED",
  "commonName": "example.com",
  "expires": "2027-03-11T00:00:00Z"
}
```

### resendEmail

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, ResendCertificateEmailRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().resendEmail(new ResendCertificateEmailRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### addAlternateEmailAddress

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, AddAlternateEmailAddressRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().addAlternateEmailAddress(new AddAlternateEmailAddressRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### resendEmailToAddress

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, ResendCertificateEmailToAddressRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().resendEmailToAddress(new ResendCertificateEmailToAddressRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### getEmailHistory

Returns: `CertificateEmailHistoryResponse`

Request code:

```ts
import { Client, Config, GetCertificateEmailHistoryRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getEmailHistory(new GetCertificateEmailHistoryRequest());
```

Response JSON example:

```json
{
  "history": [
    {
      "emailId": "mail_1",
      "emailAddress": "admin@example.com",
      "status": "SENT",
      "createdAt": "2026-03-11T12:00:00Z"
    }
  ]
}
```

### deleteCallback

Returns: `CertificateCallbackResponse`

Request code:

```ts
import { Client, Config, DeleteCertificateCallbackRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().deleteCallback(new DeleteCertificateCallbackRequest());
```

Response JSON example:

```json
{
  "callbackUrl": "https://example.com/callback",
  "enabled": true
}
```

### getCallback

Returns: `CertificateCallbackResponse`

Request code:

```ts
import { Client, Config, GetCertificateCallbackRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getCallback(new GetCertificateCallbackRequest());
```

Response JSON example:

```json
{
  "callbackUrl": "https://example.com/callback",
  "enabled": true
}
```

### replaceCallback

Returns: `CertificateCallbackResponse`

Request code:

```ts
import { Client, Config, ReplaceCertificateCallbackRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().replaceCallback(new ReplaceCertificateCallbackRequest());
```

Response JSON example:

```json
{
  "callbackUrl": "https://example.com/callback",
  "enabled": true
}
```

### cancel

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, CancelCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().cancel(new CancelCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### download

Returns: `CertificateBundleResponse`

Request code:

```ts
import { Client, Config, DownloadCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().download(new DownloadCertificateRequest());
```

Response JSON example:

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----...",
  "privateKey": "-----BEGIN PRIVATE KEY-----...",
  "caBundle": "-----BEGIN CERTIFICATE-----..."
}
```

### reissue

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, ReissueCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().reissue(new ReissueCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### renew

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, RenewCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().renew(new RenewCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### revoke

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, RevokeCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().revoke(new RevokeCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### getSiteSeal

Returns: `CertificateSiteSealResponse`

Request code:

```ts
import { Client, Config, GetCertificateSiteSealRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getSiteSeal(new GetCertificateSiteSealRequest());
```

Response JSON example:

```json
{
  "html": "<div>Site Seal</div>"
}
```

### verifyDomainControl

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, VerifyCertificateDomainControlRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().verifyDomainControl(new VerifyCertificateDomainControlRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### getByEntitlement

Returns: `CertificateCollectionResponse`

Request code:

```ts
import { Client, Config, GetCertificatesByEntitlementRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getByEntitlement(new GetCertificatesByEntitlementRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123456",
      "commonName": "example.com",
      "status": "ISSUED",
      "expires": "2027-03-11T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### createForEntitlement

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, CreateCertificateForEntitlementRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().createForEntitlement(new CreateCertificateForEntitlementRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### downloadByEntitlement

Returns: `CertificateBundleResponse`

Request code:

```ts
import { Client, Config, DownloadCertificateByEntitlementRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().downloadByEntitlement(new DownloadCertificateByEntitlementRequest());
```

Response JSON example:

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----...",
  "privateKey": "-----BEGIN PRIVATE KEY-----...",
  "caBundle": "-----BEGIN CERTIFICATE-----..."
}
```

### listCustomerCertificates

Returns: `CertificateCollectionResponse`

Request code:

```ts
import { Client, Config, ListCustomerCertificatesRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().listCustomerCertificates(new ListCustomerCertificatesRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123456",
      "commonName": "example.com",
      "status": "ISSUED",
      "expires": "2027-03-11T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### getCustomerCertificate

Returns: `CertificateIdentifierResponse`

Request code:

```ts
import { Client, Config, GetCustomerCertificateRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getCustomerCertificate(new GetCustomerCertificateRequest());
```

Response JSON example:

```json
{
  "certificateId": "crt_123456",
  "status": "PENDING_ISSUANCE"
}
```

### listDomainVerifications

Returns: `CertificateCollectionResponse`

Request code:

```ts
import { Client, Config, ListDomainVerificationsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().listDomainVerifications(new ListDomainVerificationsRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123456",
      "commonName": "example.com",
      "status": "ISSUED",
      "expires": "2027-03-11T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### getDomainVerificationDetails

Returns: `CertificateDomainVerificationResponse`

Request code:

```ts
import { Client, Config, GetDomainVerificationDetailsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getDomainVerificationDetails(new GetDomainVerificationDetailsRequest());
```

Response JSON example:

```json
{
  "domain": "example.com",
  "method": "DNS",
  "status": "PENDING",
  "token": "_acme-challenge",
  "value": "token-value"
}
```

### getAcmeExternalAccountBinding

Returns: `CertificateAcmeExternalAccountBindingResponse`

Request code:

```ts
import { Client, Config, GetAcmeExternalAccountBindingRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().getAcmeExternalAccountBinding(new GetAcmeExternalAccountBindingRequest());
```

Response JSON example:

```json
{
  "kid": "kid_123",
  "hmacKey": "hmac_abc"
}
```

### searchSubscriptionsByDomain

Returns: `CertificateCollectionResponse`

Request code:

```ts
import { Client, Config, SearchSubscriptionsByDomainRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().searchSubscriptionsByDomain(new SearchSubscriptionsByDomainRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123456",
      "commonName": "example.com",
      "status": "ISSUED",
      "expires": "2027-03-11T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### listSubscriptionCertificates

Returns: `CertificateCollectionResponse`

Request code:

```ts
import { Client, Config, ListSubscriptionCertificatesRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().listSubscriptionCertificates(new ListSubscriptionCertificatesRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123456",
      "commonName": "example.com",
      "status": "ISSUED",
      "expires": "2027-03-11T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

## Exceptions

Service-specific exceptions are under `src/errors/certificates/*` and expose `getErrorResponse()`.
