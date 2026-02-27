# Orders Service

This document covers the Orders service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.orders()`

## list

Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time

- HTTP method: `GET`
- Path: `/v1/orders`
- Swagger operationId: `list`

### Input

```js
const response = await client.orders().list(
  'header-value',
  'sample',
  'sample',
  'sample',
  'sample',
  'sample',
  'sample',
  1,
  1,
  'sample',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/orders",
  "summary": "Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time",
  "data": {}
}
```

## get

Retrieve details for specified order

- HTTP method: `GET`
- Path: `/v1/orders/{orderId}`
- Swagger operationId: `get`

### Input

```js
const response = await client.orders().get(
  'sample',
  'header-value',
  'header-value',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/orders/{orderId}",
  "summary": "Retrieve details for specified order",
  "data": {}
}
```
