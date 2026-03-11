# Aftermarket Service

Client accessor: `client.aftermarket()`

## Method Index

- [`getListings`](#getlistings): `ListingsResponse`
- [`deleteListings`](#deletelistings): `ListingActionResponse`
- [`addExpiryListings`](#addexpirylistings): `ListingActionResponse`

## Methods

### getListings

Returns: `ListingsResponse`

Request code:

```ts
import { Client, Config, GetListingsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.aftermarket().getListings(new GetListingsRequest());
```

Response JSON example:

```json
{
  "listings": [
    {
      "fqdn": "example.com",
      "listingId": 1001,
      "listingStatus": "ACTIVE",
      "price": 2499,
      "currency": "USD"
    }
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 20
  }
}
```

### deleteListings

Returns: `ListingActionResponse`

Request code:

```ts
import { Client, Config, DeleteListingsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.aftermarket().deleteListings(new DeleteListingsRequest());
```

Response JSON example:

```json
{
  "listingActionId": 900122
}
```

### addExpiryListings

Returns: `ListingActionResponse`

Request code:

```ts
import { Client, Config, AddExpiryListingsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.aftermarket().addExpiryListings(new AddExpiryListingsRequest());
```

Response JSON example:

```json
{
  "listingActionId": 900122
}
```

## Exceptions

Service-specific exceptions are under `src/errors/aftermarket/*` and expose `getErrorResponse()`.
