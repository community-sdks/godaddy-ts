# Auctions Service

This document covers the Auctions service in the GoDaddy JavaScript SDK. It wraps the **Auctions API** endpoints from the provided source documentation.

Client accessor: `client.auctions()`

## placeBids

Places multiple bids with a single request.

- HTTP method: `POST`
- Path: `/v1/customers/{customerId}/aftermarket/listings/bids`
- Swagger operationId: `placeBids`

### Input

```js
const response = await client.auctions().placeBids(
  'sample',
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/customers/{customerId}/aftermarket/listings/bids",
  "summary": "Places multiple bids with a single request.",
  "data": {}
}
```
