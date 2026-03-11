# Certificates Service

Client accessor: `client.certificates()`

## Method Index

- `create`: `CreateCertificateRequest` -> `CertificateIdentifierResponse`
- `validate`: `ValidateCertificateRequest` -> `CertificateValidationResponse`
- `get`: `GetCertificateRequest` -> `CertificateIdentifierResponse`
- `listActions`: `ListCertificateActionsRequest` -> `CertificateActionListResponse`
- `resendEmail`: `ResendCertificateEmailRequest` -> `CertificateIdentifierResponse`
- `addAlternateEmailAddress`: `AddAlternateEmailAddressRequest` -> `CertificateIdentifierResponse`
- `resendEmailToAddress`: `ResendCertificateEmailToAddressRequest` -> `CertificateIdentifierResponse`
- `getEmailHistory`: `GetCertificateEmailHistoryRequest` -> `CertificateEmailHistoryResponse`
- `deleteCallback`: `DeleteCertificateCallbackRequest` -> `CertificateCallbackResponse`
- `getCallback`: `GetCertificateCallbackRequest` -> `CertificateCallbackResponse`
- `replaceCallback`: `ReplaceCertificateCallbackRequest` -> `CertificateCallbackResponse`
- `cancel`: `CancelCertificateRequest` -> `CertificateIdentifierResponse`
- `download`: `DownloadCertificateRequest` -> `CertificateBundleResponse`
- `reissue`: `ReissueCertificateRequest` -> `CertificateIdentifierResponse`
- `renew`: `RenewCertificateRequest` -> `CertificateIdentifierResponse`
- `revoke`: `RevokeCertificateRequest` -> `CertificateIdentifierResponse`
- `getSiteSeal`: `GetCertificateSiteSealRequest` -> `CertificateSiteSealResponse`
- `verifyDomainControl`: `VerifyCertificateDomainControlRequest` -> `CertificateIdentifierResponse`
- `getByEntitlement`: `GetCertificatesByEntitlementRequest` -> `CertificateCollectionResponse`
- `createForEntitlement`: `CreateCertificateForEntitlementRequest` -> `CertificateIdentifierResponse`
- `downloadByEntitlement`: `DownloadCertificateByEntitlementRequest` -> `CertificateBundleResponse`
- `listCustomerCertificates`: `ListCustomerCertificatesRequest` -> `CertificateCollectionResponse`
- `getCustomerCertificate`: `GetCustomerCertificateRequest` -> `CertificateIdentifierResponse`
- `listDomainVerifications`: `ListDomainVerificationsRequest` -> `CertificateCollectionResponse`
- `getDomainVerificationDetails`: `GetDomainVerificationDetailsRequest` -> `CertificateDomainVerificationResponse`
- `getAcmeExternalAccountBinding`: `GetAcmeExternalAccountBindingRequest` -> `CertificateAcmeExternalAccountBindingResponse`
- `searchSubscriptionsByDomain`: `SearchSubscriptionsByDomainRequest` -> `CertificateCollectionResponse`
- `listSubscriptionCertificates`: `ListSubscriptionCertificatesRequest` -> `CertificateCollectionResponse`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { CreateCertificateRequest } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.certificates().create(new CreateCertificateRequest());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
