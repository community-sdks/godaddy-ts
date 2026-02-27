# Shoppers Service

This document covers the Shoppers service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.shoppers()`

## createSubaccount

Create a Subaccount owned by the authenticated Reseller

- HTTP method: `POST`
- Path: `/v1/shoppers/subaccount`
- Swagger operationId: `createSubaccount`

### Input

```js
const response = await client.shoppers().createSubaccount(
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/shoppers/subaccount",
  "summary": "Create a Subaccount owned by the authenticated Reseller",
  "data": {}
}
```

## get

Get details for the specified Shopper

- HTTP method: `GET`
- Path: `/v1/shoppers/{shopperId}`
- Swagger operationId: `get`

### Input

```js
const response = await client.shoppers().get(
  { sample: true },
  ['sample'],
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/shoppers/{shopperId}",
  "summary": "Get details for the specified Shopper",
  "data": {}
}
```

## update

Update details for the specified Shopper

- HTTP method: `POST`
- Path: `/v1/shoppers/{shopperId}`
- Swagger operationId: `update`

### Input

```js
const response = await client.shoppers().update(
  { sample: true },
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/shoppers/{shopperId}",
  "summary": "Update details for the specified Shopper",
  "data": {}
}
```

## delete

Request the deletion of a shopper profile

- HTTP method: `DELETE`
- Path: `/v1/shoppers/{shopperId}`
- Swagger operationId: `delete`

### Input

```js
const response = await client.shoppers().delete(
  { sample: true },
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "DELETE",
  "path": "/v1/shoppers/{shopperId}",
  "summary": "Request the deletion of a shopper profile",
  "data": {}
}
```

## getStatus

Get details for the specified Shopper

- HTTP method: `GET`
- Path: `/v1/shoppers/{shopperId}/status`
- Swagger operationId: `getStatus`

### Input

```js
const response = await client.shoppers().getStatus(
  { sample: true },
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/shoppers/{shopperId}/status",
  "summary": "Get details for the specified Shopper",
  "data": {}
}
```

## changePassword

Set subaccount's password

- HTTP method: `PUT`
- Path: `/v1/shoppers/{shopperId}/factors/password`
- Swagger operationId: `changePassword`

### Input

```js
const response = await client.shoppers().changePassword(
  { sample: true },
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "PUT",
  "path": "/v1/shoppers/{shopperId}/factors/password",
  "summary": "Set subaccount's password",
  "data": {}
}
```
