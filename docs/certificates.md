# Certificates Service

This document covers the Certificates service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.certificates()`

## certificate_create

Create a pending order for certificate

- HTTP method: `POST`
- Path: `/v1/certificates`
- Swagger operationId: `certificate_create`

### Input

```js
const response = await client.certificates().certificate_create(
  { sample: true },
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates",
  "summary": "Create a pending order for certificate",
  "data": {}
}
```

## certificate_validate

Validate a pending order for certificate

- HTTP method: `POST`
- Path: `/v1/certificates/validate`
- Swagger operationId: `certificate_validate`

### Input

```js
const response = await client.certificates().certificate_validate(
  { sample: true },
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/validate",
  "summary": "Validate a pending order for certificate",
  "data": {}
}
```

## certificate_get

Retrieve certificate details

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}`
- Swagger operationId: `certificate_get`

### Input

```js
const response = await client.certificates().certificate_get(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}",
  "summary": "Retrieve certificate details",
  "data": {}
}
```

## certificate_action_retrieve

Retrieve all certificate actions

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}/actions`
- Swagger operationId: `certificate_action_retrieve`

### Input

```js
const response = await client.certificates().certificate_action_retrieve(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}/actions",
  "summary": "Retrieve all certificate actions",
  "data": {}
}
```

## certificate_resend_email

Resend an email

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/email/{emailId}/resend`
- Swagger operationId: `certificate_resend_email`

### Input

```js
const response = await client.certificates().certificate_resend_email(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/email/{emailId}/resend",
  "summary": "Resend an email",
  "data": {}
}
```

## certificate_alternate_email_address

Add alternate email address

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/email/resend/{emailAddress}`
- Swagger operationId: `certificate_alternate_email_address`

### Input

```js
const response = await client.certificates().certificate_alternate_email_address(
  'sample',
  ['sample'],
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/email/resend/{emailAddress}",
  "summary": "Add alternate email address",
  "data": {}
}
```

## certificate_resend_email_address

Resend email to email address

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}`
- Swagger operationId: `certificate_resend_email_address`

### Input

```js
const response = await client.certificates().certificate_resend_email_address(
  'sample',
  'sample',
  ['sample'],
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}",
  "summary": "Resend email to email address",
  "data": {}
}
```

## certificate_email_history

Retrieve email history

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}/email/history`
- Swagger operationId: `certificate_email_history`

### Input

```js
const response = await client.certificates().certificate_email_history(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}/email/history",
  "summary": "Retrieve email history",
  "data": {}
}
```

## certificate_callback_delete

Unregister system callback

- HTTP method: `DELETE`
- Path: `/v1/certificates/{certificateId}/callback`
- Swagger operationId: `certificate_callback_delete`

### Input

```js
const response = await client.certificates().certificate_callback_delete(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "DELETE",
  "path": "/v1/certificates/{certificateId}/callback",
  "summary": "Unregister system callback",
  "data": {}
}
```

## certificate_callback_get

Retrieve system stateful action callback url

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}/callback`
- Swagger operationId: `certificate_callback_get`

### Input

```js
const response = await client.certificates().certificate_callback_get(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}/callback",
  "summary": "Retrieve system stateful action callback url",
  "data": {}
}
```

## certificate_callback_replace

Register of certificate action callback

- HTTP method: `PUT`
- Path: `/v1/certificates/{certificateId}/callback`
- Swagger operationId: `certificate_callback_replace`

### Input

```js
const response = await client.certificates().certificate_callback_replace(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "PUT",
  "path": "/v1/certificates/{certificateId}/callback",
  "summary": "Register of certificate action callback",
  "data": {}
}
```

## certificate_cancel

Cancel a pending certificate

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/cancel`
- Swagger operationId: `certificate_cancel`

### Input

```js
const response = await client.certificates().certificate_cancel(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/cancel",
  "summary": "Cancel a pending certificate",
  "data": {}
}
```

## certificate_download

Download certificate

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}/download`
- Swagger operationId: `certificate_download`

### Input

```js
const response = await client.certificates().certificate_download(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}/download",
  "summary": "Download certificate",
  "data": {}
}
```

## certificate_reissue

Reissue active certificate

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/reissue`
- Swagger operationId: `certificate_reissue`

### Input

```js
const response = await client.certificates().certificate_reissue(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/reissue",
  "summary": "Reissue active certificate",
  "data": {}
}
```

## certificate_renew

Renew active certificate

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/renew`
- Swagger operationId: `certificate_renew`

### Input

```js
const response = await client.certificates().certificate_renew(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/renew",
  "summary": "Renew active certificate",
  "data": {}
}
```

## certificate_revoke

Revoke active certificate

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/revoke`
- Swagger operationId: `certificate_revoke`

### Input

```js
const response = await client.certificates().certificate_revoke(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/revoke",
  "summary": "Revoke active certificate",
  "data": {}
}
```

## certificate_siteseal_get

Get Site seal

- HTTP method: `GET`
- Path: `/v1/certificates/{certificateId}/siteSeal`
- Swagger operationId: `certificate_siteseal_get`

### Input

```js
const response = await client.certificates().certificate_siteseal_get(
  'sample',
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/certificates/{certificateId}/siteSeal",
  "summary": "Get Site seal",
  "data": {}
}
```

## certificate_verifydomaincontrol

Check Domain Control

- HTTP method: `POST`
- Path: `/v1/certificates/{certificateId}/verifyDomainControl`
- Swagger operationId: `certificate_verifydomaincontrol`

### Input

```js
const response = await client.certificates().certificate_verifydomaincontrol(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/certificates/{certificateId}/verifyDomainControl",
  "summary": "Check Domain Control",
  "data": {}
}
```

## certificate_get_entitlement

Search for certificate details by entitlement

- HTTP method: `GET`
- Path: `/v2/certificates`
- Swagger operationId: `certificate_get_entitlement`

### Input

```js
const response = await client.certificates().certificate_get_entitlement(
  'sample',
  true,
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/certificates",
  "summary": "Search for certificate details by entitlement",
  "data": {}
}
```

## certificate_create_v2

Create a pending order for certificate

- HTTP method: `POST`
- Path: `/v2/certificates`
- Swagger operationId: `certificate_create`

### Input

```js
const response = await client.certificates().certificate_create_v2(
  { sample: true },
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v2/certificates",
  "summary": "Create a pending order for certificate",
  "data": {}
}
```

## certificate_download_entitlement

Download certificate by entitlement

- HTTP method: `GET`
- Path: `/v2/certificates/download`
- Swagger operationId: `certificate_download_entitlement`

### Input

```js
const response = await client.certificates().certificate_download_entitlement(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/certificates/download",
  "summary": "Download certificate by entitlement",
  "data": {}
}
```

## getCustomerCertificatesByCustomerId

Retrieve customer's certificates

- HTTP method: `GET`
- Path: `/v2/customers/{customerId}/certificates`
- Swagger operationId: `getCustomerCertificatesByCustomerId`

### Input

```js
const response = await client.certificates().getCustomerCertificatesByCustomerId(
  'sample',
  1,
  1,
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/customers/{customerId}/certificates",
  "summary": "Retrieve customer's certificates",
  "data": {}
}
```

## getCertificateDetailByCertIdentifier

Retrieve individual certificate details

- HTTP method: `GET`
- Path: `/v2/customers/{customerId}/certificates/{certificateId}`
- Swagger operationId: `getCertificateDetailByCertIdentifier`

### Input

```js
const response = await client.certificates().getCertificateDetailByCertIdentifier(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/customers/{customerId}/certificates/{certificateId}",
  "summary": "Retrieve individual certificate details",
  "data": {}
}
```

## getDomainInformationByCertificateId

Retrieve domain verification status

- HTTP method: `GET`
- Path: `/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications`
- Swagger operationId: `getDomainInformationByCertificateId`

### Input

```js
const response = await client.certificates().getDomainInformationByCertificateId(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications",
  "summary": "Retrieve domain verification status",
  "data": {}
}
```

## getDomainDetailsByDomain

Retrieve detailed information for supplied domain

- HTTP method: `GET`
- Path: `/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}`
- Swagger operationId: `getDomainDetailsByDomain`

### Input

```js
const response = await client.certificates().getDomainDetailsByDomain(
  'sample',
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}",
  "summary": "Retrieve detailed information for supplied domain",
  "data": {}
}
```

## getAcmeExternalAccountBinding

Retrieves the external account binding for the specified customer

- HTTP method: `GET`
- Path: `/v2/customers/{customerId}/certificates/acme/externalAccountBinding`
- Swagger operationId: `getAcmeExternalAccountBinding`

### Input

```js
const response = await client.certificates().getAcmeExternalAccountBinding(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/customers/{customerId}/certificates/acme/externalAccountBinding",
  "summary": "Retrieves the external account binding for the specified customer",
  "data": {}
}
```

## retrieveSslByDomainReseller

Get a page of subscriptions by domain

- HTTP method: `GET`
- Path: `/v2/certificates/subscriptions/search`
- Swagger operationId: `retrieveSslByDomainReseller`

### Input

```js
const response = await client.certificates().retrieveSslByDomainReseller(
  1,
  1,
  'sample',
  ['sample'],
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/certificates/subscriptions/search",
  "summary": "Get a page of subscriptions by domain",
  "data": {}
}
```

## retrieveSslByDomainSubscriptionReseller

GET a page of certificates for a specific domain product

- HTTP method: `GET`
- Path: `/v2/certificates/subscription/{guid}`
- Swagger operationId: `retrieveSslByDomainSubscriptionReseller`

### Input

```js
const response = await client.certificates().retrieveSslByDomainSubscriptionReseller(
  'sample',
  1,
  1,
  'sample',
  ['sample'],
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/certificates/subscription/{guid}",
  "summary": "GET a page of certificates for a specific domain product",
  "data": {}
}
```
