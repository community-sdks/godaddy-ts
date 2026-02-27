# Aftermarket Service

This document covers the Aftermarket service in the GoDaddy JavaScript SDK. It wraps the **Aftermarket API** endpoints from the provided source documentation.

Client accessor: `client.aftermarket()`

## getListings

Get listings from GoDaddy Auctions

- HTTP method: `GET`
- Path: `/v1/customers/{customerId}/auctions/listings`
- Swagger operationId: `getListings`

### Input

```js
const response = await client.aftermarket().getListings(
  'sample',
  ['sample'],
  ['sample'],
  'sample',
  'sample',
  1,
  1,
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/customers/{customerId}/auctions/listings",
  "summary": "Get listings from GoDaddy Auctions",
  "data": {}
}
```

## deleteListings

Remove listings from GoDaddy Auction

- HTTP method: `DELETE`
- Path: `/v1/aftermarket/listings`
- Swagger operationId: `deleteListings`

### Input

```js
const response = await client.aftermarket().deleteListings(
  ['sample'],
);
```

### Output

```json
{
  "ok": true,
  "method": "DELETE",
  "path": "/v1/aftermarket/listings",
  "summary": "Remove listings from GoDaddy Auction",
  "data": {}
}
```

## addExpiryListings

Add expiry listings into GoDaddy Auction

- HTTP method: `POST`
- Path: `/v1/aftermarket/listings/expiry`
- Swagger operationId: `addExpiryListings`

### Input

```js
const response = await client.aftermarket().addExpiryListings(
  ['sample'],
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/aftermarket/listings/expiry",
  "summary": "Add expiry listings into GoDaddy Auction",
  "data": {}
}
```
