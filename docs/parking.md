# Parking Service

Client accessor: `client.parking()`

## Method Index

- `getMetrics`: `GetMetricsRequestDto` -> `GetMetricsResponseDto`
- `getMetricsByDomain`: `GetMetricsByDomainRequestDto` -> `GetMetricsByDomainResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { GetMetricsRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.parking().getMetrics(new GetMetricsRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
