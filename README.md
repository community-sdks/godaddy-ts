# Unofficial GoDaddy TypeScript SDK

## Getting Started

```bash
npm install @community-sdks/godaddy-ts
```

```ts
import { Client, Config } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret',
}));
```

## Environment Base URLs

Base URLs are configured through `Config`.

- Sandbox (OTE): `https://api.ote-godaddy.com`
- Production: `https://api.godaddy.com`

By default, services use sandbox/OTE base URLs unless overridden in service definitions.

Use production globally:

```ts
const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret',
  baseUrl: 'https://api.godaddy.com',
}));
```

Use sandbox explicitly:

```ts
const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret',
  baseUrl: 'https://api.ote-godaddy.com',
}));
```

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