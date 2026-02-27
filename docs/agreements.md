# Agreements Service

This document covers the Agreements service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.agreements()`

## get

Retrieve Legal Agreements for provided agreements keys

- HTTP method: `GET`
- Path: `/v1/agreements`
- Swagger operationId: `get`

### Input

```js
const response = await client.agreements().get(
  ['sample'],
  'header-value',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/agreements",
  "summary": "Retrieve Legal Agreements for provided agreements keys",
  "data": {}
}
```
