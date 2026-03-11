# Orders Service

Client accessor: `client.orders()`

## Method Index

- [`list`](#list): `ListResponseDto`
- [`get`](#get): `GetResponseDto`

## Methods

### list

Returns: `ListResponseDto`

Request code:

```ts
import { Client, Config, ListRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.orders().list(new ListRequestDto());
```

Response JSON example:

```json
{
  "orders": [
    {
      "orderId": "1234567890",
      "currency": "USD",
      "createdAt": "2026-03-11T12:00:00Z"
    }
  ],
  "pagination": {
    "total": 1,
    "next": null
  }
}
```

### get

Returns: `GetResponseDto`

Request code:

```ts
import { Client, Config, GetRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.orders().get(new GetRequestDto());
```

Response JSON example:

```json
{
  "orderId": "1234567890",
  "currency": "USD",
  "createdAt": "2026-03-11T12:00:00Z",
  "status": "PENDING",
  "pricing": {
    "total": "14.99"
  },
  "items": [
    {
      "itemId": "line-1",
      "label": "example.com",
      "status": "PENDING"
    }
  ]
}
```

## Exceptions

Service-specific exceptions are under `src/errors/orders/*` and expose `getErrorResponse()`.
