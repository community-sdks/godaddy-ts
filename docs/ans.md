# Ans Service

This document covers the Ans service in the GoDaddy JavaScript SDK. It wraps the **Agent Name Service (ANS) API** endpoints from the provided source documentation.

Client accessor: `client.ans()`

## searchANSName

Search the ANSName Registry with flexible criteria

- HTTP method: `GET`
- Path: `/v1/agents`
- Swagger operationId: `searchANSName`

### Input

```js
const response = await client.ans().searchANSName(
  'sample',
  'sample',
  'sample',
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
  "path": "/v1/agents",
  "summary": "Search the ANSName Registry with flexible criteria",
  "data": {}
}
```

## registerAgent

Register a new agent with the ANS

- HTTP method: `POST`
- Path: `/v1/agents/register`
- Swagger operationId: `registerAgent`

### Input

```js
const response = await client.ans().registerAgent(
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/register",
  "summary": "Register a new agent with the ANS",
  "data": {}
}
```

## resolveANSName

Resolve an ANSName to an endpoint

- HTTP method: `POST`
- Path: `/v1/agents/resolution`
- Swagger operationId: `resolveANSName`

### Input

```js
const response = await client.ans().resolveANSName(
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/resolution",
  "summary": "Resolve an ANSName to an endpoint",
  "data": {}
}
```

## getAgent

Get agent details

- HTTP method: `GET`
- Path: `/v1/agents/{agentId}`
- Swagger operationId: `getAgent`

### Input

```js
const response = await client.ans().getAgent(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agents/{agentId}",
  "summary": "Get agent details",
  "data": {}
}
```

## validateRegistration

Trigger ACME validation

- HTTP method: `POST`
- Path: `/v1/agents/{agentId}/verify-acme`
- Swagger operationId: `validateRegistration`

### Input

```js
const response = await client.ans().validateRegistration(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/{agentId}/verify-acme",
  "summary": "Trigger ACME validation",
  "data": {}
}
```

## verifyDnsRecords

Verify DNS records configured

- HTTP method: `POST`
- Path: `/v1/agents/{agentId}/verify-dns`
- Swagger operationId: `verifyDnsRecords`

### Input

```js
const response = await client.ans().verifyDnsRecords(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/{agentId}/verify-dns",
  "summary": "Verify DNS records configured",
  "data": {}
}
```

## getAgentIdentityCertificateByAgentId

Get agent's identity certificates

- HTTP method: `GET`
- Path: `/v1/agents/{agentId}/certificates/identity`
- Swagger operationId: `getAgentIdentityCertificateByAgentId`

### Input

```js
const response = await client.ans().getAgentIdentityCertificateByAgentId(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agents/{agentId}/certificates/identity",
  "summary": "Get agent's identity certificates",
  "data": {}
}
```

## submitAgentIdentityCsrByAgentId

Submit identity certificate CSR

- HTTP method: `POST`
- Path: `/v1/agents/{agentId}/certificates/identity`
- Swagger operationId: `submitAgentIdentityCsrByAgentId`

### Input

```js
const response = await client.ans().submitAgentIdentityCsrByAgentId(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/{agentId}/certificates/identity",
  "summary": "Submit identity certificate CSR",
  "data": {}
}
```

## getAgentServerCertificateByAgentId

Get agent's server certificates

- HTTP method: `GET`
- Path: `/v1/agents/{agentId}/certificates/server`
- Swagger operationId: `getAgentServerCertificateByAgentId`

### Input

```js
const response = await client.ans().getAgentServerCertificateByAgentId(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agents/{agentId}/certificates/server",
  "summary": "Get agent's server certificates",
  "data": {}
}
```

## submitAgentServerCsrByAgentId

Submit server certificate CSR

- HTTP method: `POST`
- Path: `/v1/agents/{agentId}/certificates/server`
- Swagger operationId: `submitAgentServerCsrByAgentId`

### Input

```js
const response = await client.ans().submitAgentServerCsrByAgentId(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/agents/{agentId}/certificates/server",
  "summary": "Submit server certificate CSR",
  "data": {}
}
```

## getAgentCsrStatusByAgentId

Get CSR status

- HTTP method: `GET`
- Path: `/v1/agents/{agentId}/csrs/{csrId}/status`
- Swagger operationId: `getAgentCsrStatusByAgentId`

### Input

```js
const response = await client.ans().getAgentCsrStatusByAgentId(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agents/{agentId}/csrs/{csrId}/status",
  "summary": "Get CSR status",
  "data": {}
}
```

## getAgentEvents

Retrieve ANS agent events

- HTTP method: `GET`
- Path: `/v1/agents/events`
- Swagger operationId: `getAgentEvents`

### Input

```js
const response = await client.ans().getAgentEvents(
  'header-value',
  'sample',
  'sample',
  1,
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agents/events",
  "summary": "Retrieve ANS agent events",
  "data": {}
}
```
