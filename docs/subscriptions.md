# Subscriptions Service

This document covers the Subscriptions service in the GoDaddy JavaScript SDK. It wraps the **GoDaddy API** endpoints from the provided source documentation.

Client accessor: `client.subscriptions()`

## list

Retrieve a list of Subscriptions for the specified Shopper

- HTTP method: `GET`
- Path: `/v1/subscriptions`
- Swagger operationId: `list`

### Input

```js
const response = await client.subscriptions().list(
  'header-value',
  'header-value',
  'header-value',
  ['sample'],
  ['sample'],
  1,
  1,
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/subscriptions",
  "summary": "Retrieve a list of Subscriptions for the specified Shopper",
  "data": {}
}
```

## productGroups

Retrieve a list of ProductGroups for the specified Shopper

- HTTP method: `GET`
- Path: `/v1/subscriptions/productGroups`
- Swagger operationId: `productGroups`

### Input

```js
const response = await client.subscriptions().productGroups(
  'header-value',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/subscriptions/productGroups",
  "summary": "Retrieve a list of ProductGroups for the specified Shopper",
  "data": {}
}
```

## cancel

Cancel the specified Subscription

- HTTP method: `DELETE`
- Path: `/v1/subscriptions/{subscriptionId}`
- Swagger operationId: `cancel`

### Input

```js
const response = await client.subscriptions().cancel(
  { sample: true },
  'header-value',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "DELETE",
  "path": "/v1/subscriptions/{subscriptionId}",
  "summary": "Cancel the specified Subscription",
  "data": {}
}
```

## get

Retrieve details for the specified Subscription

- HTTP method: `GET`
- Path: `/v1/subscriptions/{subscriptionId}`
- Swagger operationId: `get`

### Input

```js
const response = await client.subscriptions().get(
  { sample: true },
  'header-value',
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/subscriptions/{subscriptionId}",
  "summary": "Retrieve details for the specified Subscription",
  "data": {}
}
```

## update

Update details for the specified Subscription

- HTTP method: `PATCH`
- Path: `/v1/subscriptions/{subscriptionId}`
- Swagger operationId: `update`

### Input

```js
const response = await client.subscriptions().update(
  { sample: true },
  'header-value',
  { sample: true },
  'header-value',
);
```

### Output

```json
{
  "ok": true,
  "method": "PATCH",
  "path": "/v1/subscriptions/{subscriptionId}",
  "summary": "Update details for the specified Subscription",
  "data": {}
}
```
