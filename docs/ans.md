# ANS Service

Client accessor: `client.ans()`

## Method Index

- [`search`](#search): `AgentSearchResponse`
- [`register`](#register): `AgentDetailsResponse`
- [`resolve`](#resolve): `AgentDetailsResponse`
- [`get`](#get): `AgentDetailsResponse`
- [`revoke`](#revoke): `BaseResponseDto`
- [`verifyAcme`](#verifyacme): `AgentDetailsResponse`
- [`verifyDns`](#verifydns): `AgentDetailsResponse`
- [`getIdentityCertificates`](#getidentitycertificates): `CertificateListResponse`
- [`submitIdentityCsr`](#submitidentitycsr): `CsrSubmissionResponse`
- [`getServerCertificates`](#getservercertificates): `CertificateListResponse`
- [`submitServerCsr`](#submitservercsr): `CsrSubmissionResponse`
- [`getCsrStatus`](#getcsrstatus): `CsrStatusResponse`
- [`events`](#events): `EventPageResponse`

## Methods

### search

Returns: `AgentSearchResponse`

Request code:

```ts
import { Client, Config, SearchAgentsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().search(new SearchAgentsRequest());
```

Response JSON example:

```json
{
  "agents": [
    {
      "agentId": "agt_001",
      "displayName": "Checkout Agent",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ],
  "totalCount": 1,
  "returnedCount": 1,
  "limit": 10,
  "offset": 0,
  "hasMore": false
}
```

### register

Returns: `AgentDetailsResponse`

Request code:

```ts
import { Client, Config, RegisterAgentRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().register(new RegisterAgentRequest());
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### resolve

Returns: `AgentDetailsResponse`

Request code:

```ts
import { Client, Config, ResolveAgentRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().resolve(new ResolveAgentRequest());
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### get

Returns: `AgentDetailsResponse`

Request code:

```ts
import { Client, Config, GetAgentRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().get(new GetAgentRequest());
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### revoke

Returns: `BaseResponseDto`

Request code:

```ts
import { Client, Config } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().revoke();
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### verifyAcme

Returns: `AgentDetailsResponse`

Request code:

```ts
import { Client, Config, VerifyAcmeRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().verifyAcme(new VerifyAcmeRequest());
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### verifyDns

Returns: `AgentDetailsResponse`

Request code:

```ts
import { Client, Config, VerifyDnsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().verifyDns(new VerifyDnsRequest());
```

Response JSON example:

```json
{
  "agentId": "agt_001",
  "status": "ACTIVE",
  "displayName": "Checkout Agent",
  "endpoints": [
    {
      "url": "https://agent.example.com",
      "protocol": "MCP",
      "status": "ACTIVE"
    }
  ]
}
```

### getIdentityCertificates

Returns: `CertificateListResponse`

Request code:

```ts
import { Client, Config, GetIdentityCertificatesRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().getIdentityCertificates(new GetIdentityCertificatesRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123",
      "status": "ISSUED",
      "expiresAt": "2027-03-11T00:00:00Z"
    }
  ]
}
```

### submitIdentityCsr

Returns: `CsrSubmissionResponse`

Request code:

```ts
import { Client, Config, SubmitIdentityCsrRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().submitIdentityCsr(new SubmitIdentityCsrRequest());
```

Response JSON example:

```json
{
  "csrId": "csr_123"
}
```

### getServerCertificates

Returns: `CertificateListResponse`

Request code:

```ts
import { Client, Config, GetServerCertificatesRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().getServerCertificates(new GetServerCertificatesRequest());
```

Response JSON example:

```json
{
  "certificates": [
    {
      "certificateId": "crt_123",
      "status": "ISSUED",
      "expiresAt": "2027-03-11T00:00:00Z"
    }
  ]
}
```

### submitServerCsr

Returns: `CsrSubmissionResponse`

Request code:

```ts
import { Client, Config, SubmitServerCsrRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().submitServerCsr(new SubmitServerCsrRequest());
```

Response JSON example:

```json
{
  "csrId": "csr_123"
}
```

### getCsrStatus

Returns: `CsrStatusResponse`

Request code:

```ts
import { Client, Config, GetCsrStatusRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().getCsrStatus(new GetCsrStatusRequest());
```

Response JSON example:

```json
{
  "csrId": "csr_123",
  "status": "PENDING",
  "updatedAt": "2026-03-11T12:00:00Z"
}
```

### events

Returns: `EventPageResponse`

Request code:

```ts
import { Client, Config, GetAgentEventsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.ans().events(new GetAgentEventsRequest());
```

Response JSON example:

```json
{
  "items": [
    {
      "eventId": "evt_1",
      "type": "AGENT_UPDATED",
      "createdAt": "2026-03-11T12:00:00Z"
    }
  ]
}
```

## Exceptions

Service-specific exceptions are under `src/errors/ans/*` and expose `getErrorResponse()`.
