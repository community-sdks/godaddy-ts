# Parking Service

This document covers the Parking service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.parking()`

## getMetrics

Returns a list of parking metrics for the specified customer, using specified filters

- HTTP method: `GET`
- Path: `/v1/customers/{customerId}/parking/metrics`
- Swagger operationId: `getMetrics`

### Input

```js
const response = await client.parking().getMetrics(
  'sample',
  'sample',
  'sample',
  1,
  1,
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/customers/{customerId}/parking/metrics",
  "summary": "Returns a list of parking metrics for the specified customer, using specified filters",
  "data": {}
}
```

## getMetricsByDomain

Returns a list of domain metrics for the specified customer and portfolio, using specified filters

- HTTP method: `GET`
- Path: `/v1/customers/{customerId}/parking/metricsByDomain`
- Swagger operationId: `getMetricsByDomain`

### Input

```js
const response = await client.parking().getMetricsByDomain(
  'sample',
  'sample',
  'sample',
  ['sample'],
  'sample',
  'sample',
  1,
  1,
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/customers/{customerId}/parking/metricsByDomain",
  "summary": "Returns a list of domain metrics for the specified customer and portfolio, using specified filters",
  "data": {}
}
```
