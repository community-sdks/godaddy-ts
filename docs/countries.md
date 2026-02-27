# Countries Service

This document covers the Countries service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.countries()`

## getCountries

Retrieves summary country information for the provided marketId and filters

- HTTP method: `GET`
- Path: `/v1/countries`
- Swagger operationId: `getCountries`

### Input

```js
const response = await client.countries().getCountries(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/countries",
  "summary": "Retrieves summary country information for the provided marketId and filters",
  "data": {}
}
```

## getCountry

Retrieves country and summary state information for provided countryKey

- HTTP method: `GET`
- Path: `/v1/countries/{countryKey}`
- Swagger operationId: `getCountry`

### Input

```js
const response = await client.countries().getCountry(
  'sample',
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/countries/{countryKey}",
  "summary": "Retrieves country and summary state information for provided countryKey",
  "data": {}
}
```
