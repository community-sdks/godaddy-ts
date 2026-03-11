# GoDaddy JavaScript SDK

## Getting Started

```bash
npm install @community-sdks/godaddy-js
```

```js
import { Client, Config } from './src/index.js';

const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret'
}));
```

## API Style

- Service methods use unique camelCase names (for example `getCustomerDomain`, `listSubscriptionCertificates`).
- Methods avoid HTTP verb/path-prefixed names (no `get__v2_...`, `post__...`, etc.).
- Each method accepts a request DTO class.
- Each method returns a response DTO class.

## DTO Usage

```js
import {
  Client,
  Config,
  DomainsListRequest,
  DomainCollectionResponse,
} from './src/index.js';

const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret',
}));

const response = await client.domains().list(new DomainsListRequest({
  xShopperId: '123',
  limit: 10,
}));

if (response instanceof DomainCollectionResponse) {
  console.log(response.raw);
}
```

Request DTOs expose request-shaping helpers used internally:

- `toPathParams()`
- `toQueryParams()`
- `toHeaders()`
- `toBody()`

Response DTOs expose decoded payload on `.raw`.

## Services

- [Abuse](docs/abuse.md): Abuse ticket management endpoints for listing, creating, and retrieving abuse reports.
- [Aftermarket](docs/aftermarket.md): Aftermarket listing endpoints for auction listings, expiry listings, and listing removals.
- [Agreements](docs/agreements.md): Legal agreement lookup endpoints for required agreement keys.
- [Ans](docs/ans.md): Agent Name Service endpoints for agent registration, resolution, certificates, and events.
- [Auctions](docs/auctions.md): Auction bidding endpoints for placing bids on aftermarket listings.
- [Certificates](docs/certificates.md): Certificate lifecycle endpoints for ordering, validation, download, reissue, renewal, revocation, and subscription lookups.
- [Countries](docs/countries.md): Country and market metadata endpoints for country and state lookups.
- [Domains](docs/domains.md): Domain management endpoints for availability, purchase, DNS, transfers, forwarding, notifications, and maintenance data.
- [Orders](docs/orders.md): Order retrieval endpoints for listing orders and loading individual order details.
- [Parking](docs/parking.md): Parking analytics endpoints for aggregate and per-domain parking metrics.
- [Shoppers](docs/shoppers.md): Shopper account endpoints for subaccounts, profile updates, deletion, status, and password changes.
- [Subscriptions](docs/subscriptions.md): Subscription endpoints for listing, product groups, retrieval, cancellation, and updates.