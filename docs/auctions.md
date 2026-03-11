# Auctions Service

Client accessor: `client.auctions()`

## Method Index

- [`placeBids`](#placebids): `PlaceBidsResponseDto`

## Methods

### placeBids

Returns: `PlaceBidsResponseDto`

Request code:

```ts
import { Client, Config, PlaceBidsRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.auctions().placeBids(new PlaceBidsRequestDto());
```

Response JSON example:

```json
{
  "listingId": 200000,
  "bidId": "bid_001",
  "bidAmountUsd": 1500,
  "status": "ACTIVE",
  "isHighestBidder": true
}
```

## Exceptions

Service-specific exceptions are under `src/errors/auctions/*` and expose `getErrorResponse()`.
