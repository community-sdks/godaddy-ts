# Subscriptions Service

Client accessor: `client.subscriptions()`

## Method Index

- [`list`](#list): `ListResponseDto`
- [`productGroups`](#productgroups): `ProductGroupsResponseDto`
- [`cancel`](#cancel): `CancelResponseDto`
- [`get`](#get): `GetResponseDto`
- [`update`](#update): `UpdateResponseDto`

## Methods

### list

Returns: `ListResponseDto`

Request code:

```ts
import { Client, Config, ListRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().list(new ListRequestDto());
```

Response JSON example:

```json
{
  "subscriptions": [
    {
      "subscriptionId": "sub_123456",
      "status": "ACTIVE",
      "renewAuto": true
    }
  ],
  "pagination": {
    "total": 1,
    "next": null
  }
}
```

### productGroups

Returns: `ProductGroupsResponseDto`

Request code:

```ts
import { Client, Config, ProductGroupsRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().productGroups(new ProductGroupsRequestDto());
```

Response JSON example:

```json
{
  "productGroups": [
    {
      "productGroupKey": "domains",
      "subscriptionCount": 1
    }
  ]
}
```

### cancel

Returns: `CancelResponseDto`

Request code:

```ts
import { Client, Config, CancelRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().cancel(new CancelRequestDto());
```

Response JSON example:

```json
{
  "subscriptionId": "sub_123456",
  "status": "CANCELLED"
}
```

### get

Returns: `GetResponseDto`

Request code:

```ts
import { Client, Config, GetRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().get(new GetRequestDto());
```

Response JSON example:

```json
{
  "subscriptionId": "sub_123456",
  "status": "ACTIVE",
  "label": "My Subscription",
  "renewAuto": true
}
```

### update

Returns: `UpdateResponseDto`

Request code:

```ts
import { Client, Config, UpdateRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().update(new UpdateRequestDto());
```

Response JSON example:

```json
{
  "subscriptionId": "sub_123456",
  "status": "ACTIVE"
}
```

## Exceptions

Service-specific exceptions are under `src/errors/subscriptions/*` and expose `getErrorResponse()`.
