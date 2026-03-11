# Aftermarket Service

Client accessor: `client.aftermarket()`

## Method Index

- `getListings`: `GetListingsRequest` -> `ListingsResponse`
- `deleteListings`: `DeleteListingsRequest` -> `ListingActionResponse`
- `addExpiryListings`: `AddExpiryListingsRequest` -> `ListingActionResponse`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { GetListingsRequest } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.aftermarket().getListings(new GetListingsRequest());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
