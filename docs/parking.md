# Parking Service

Client accessor: `client.parking()`

## Method Index

- [`getMetrics`](#getmetrics): `GetMetricsResponseDto`
- [`getMetricsByDomain`](#getmetricsbydomain): `GetMetricsByDomainResponseDto`

## Methods

### getMetrics

Returns: `GetMetricsResponseDto`

Request code:

```ts
import { Client, Config, GetMetricsRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.parking().getMetrics(new GetMetricsRequestDto());
```

Response JSON example:

```json
{
  "currencyId": "USD",
  "metrics": [
    {
      "periodPtz": "2026-03-11",
      "visitCount": 120,
      "adClickCount": 14,
      "revenue": 3450
    }
  ],
  "pagination": {
    "total": 1,
    "next": null
  }
}
```

### getMetricsByDomain

Returns: `GetMetricsByDomainResponseDto`

Request code:

```ts
import { Client, Config, GetMetricsByDomainRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.parking().getMetricsByDomain(new GetMetricsByDomainRequestDto());
```

Response JSON example:

```json
{
  "currencyId": "USD",
  "startDate": "2026-03-01",
  "endDate": "2026-03-11",
  "metrics": [
    {
      "domain": "example.com",
      "visitCount": 120,
      "pageViewCount": 200,
      "revenue": 3450
    }
  ],
  "pagination": {
    "total": 1,
    "next": null
  }
}
```

## Exceptions

Service-specific exceptions are under `src/errors/parking/*` and expose `getErrorResponse()`.
