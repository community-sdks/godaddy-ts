# Ans Service

Client accessor: `client.ans()`

## Method Index

- `search`: `SearchAgentsRequest` -> `AgentSearchResponse`
- `register`: `RegisterAgentRequest` -> `AgentDetailsResponse`
- `resolve`: `ResolveAgentRequest` -> `AgentDetailsResponse`
- `get`: `GetAgentRequest` -> `AgentDetailsResponse`
- `verifyAcme`: `VerifyAcmeRequest` -> `AgentDetailsResponse`
- `verifyDns`: `VerifyDnsRequest` -> `AgentDetailsResponse`
- `getIdentityCertificates`: `GetIdentityCertificatesRequest` -> `CertificateListResponse`
- `submitIdentityCsr`: `SubmitIdentityCsrRequest` -> `CsrSubmissionResponse`
- `getServerCertificates`: `GetServerCertificatesRequest` -> `CertificateListResponse`
- `submitServerCsr`: `SubmitServerCsrRequest` -> `CsrSubmissionResponse`
- `getCsrStatus`: `GetCsrStatusRequest` -> `CsrStatusResponse`
- `events`: `GetAgentEventsRequest` -> `EventPageResponse`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { SearchAgentsRequest } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().search(new SearchAgentsRequest());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
