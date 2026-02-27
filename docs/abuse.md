# Abuse Service

This document covers the Abuse service in the GoDaddy JavaScript SDK. It wraps the **Abuse API** endpoints from the provided source documentation.

Client accessor: `client.abuse()`

## getTickets

List all abuse tickets ids that match user provided filters

- HTTP method: `GET`
- Path: `/v1/abuse/tickets`
- Swagger operationId: `getTickets`

### Input

```js
const response = await client.abuse().getTickets(
  'sample',
  true,
  'sample',
  'sample',
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
  "path": "/v1/abuse/tickets",
  "summary": "List all abuse tickets ids that match user provided filters",
  "data": {}
}
```

## createTicket

Create a new abuse ticket

- HTTP method: `POST`
- Path: `/v1/abuse/tickets`
- Swagger operationId: `createTicket`

### Input

```js
const response = await client.abuse().createTicket(
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v1/abuse/tickets",
  "summary": "Create a new abuse ticket",
  "data": {}
}
```

## getTicketInfo

Return the abuse ticket data for a given ticket id

- HTTP method: `GET`
- Path: `/v1/abuse/tickets/{ticketId}`
- Swagger operationId: `getTicketInfo`

### Input

```js
const response = await client.abuse().getTicketInfo(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v1/abuse/tickets/{ticketId}",
  "summary": "Return the abuse ticket data for a given ticket id",
  "data": {}
}
```

## getTicketsV2

List all abuse tickets ids that match user provided filters

- HTTP method: `GET`
- Path: `/v2/abuse/tickets`
- Swagger operationId: `getTicketsV2`

### Input

```js
const response = await client.abuse().getTicketsV2(
  'sample',
  true,
  'sample',
  'sample',
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
  "path": "/v2/abuse/tickets",
  "summary": "List all abuse tickets ids that match user provided filters",
  "data": {}
}
```

## createTicketV2

Create a new abuse ticket

- HTTP method: `POST`
- Path: `/v2/abuse/tickets`
- Swagger operationId: `createTicketV2`

### Input

```js
const response = await client.abuse().createTicketV2(
  { sample: true },
);
```

### Output

```json
{
  "ok": true,
  "method": "POST",
  "path": "/v2/abuse/tickets",
  "summary": "Create a new abuse ticket",
  "data": {}
}
```

## getTicketInfoV2

Return the abuse ticket data for a given ticket id

- HTTP method: `GET`
- Path: `/v2/abuse/tickets/{ticketId}`
- Swagger operationId: `getTicketInfoV2`

### Input

```js
const response = await client.abuse().getTicketInfoV2(
  'sample',
);
```

### Output

```json
{
  "ok": true,
  "method": "GET",
  "path": "/v2/abuse/tickets/{ticketId}",
  "summary": "Return the abuse ticket data for a given ticket id",
  "data": {}
}
```
