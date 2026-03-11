# Abuse Service

Client accessor: `client.abuse()`

## Method Index

- [`getTickets`](#gettickets): `AbuseTicketListResponse`
- [`createTicket`](#createticket): `AbuseTicketIdResponse`
- [`getTicketInfo`](#getticketinfo): `AbuseTicketDetailsResponse`
- [`getTicketsV2`](#getticketsv2): `AbuseTicketListResponse`
- [`createTicketV2`](#createticketv2): `AbuseTicketIdResponse`
- [`getTicketInfoV2`](#getticketinfov2): `AbuseTicketDetailsResponse`

## Methods

### getTickets

Returns: `AbuseTicketListResponse`

Request code:

```ts
import { Client, Config, GetTicketsRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().getTickets(new GetTicketsRequest());
```

Response JSON example:

```json
{
  "ticketIds": [
    "TCK-100001"
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### createTicket

Returns: `AbuseTicketIdResponse`

Request code:

```ts
import { Client, Config, CreateTicketRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().createTicket(new CreateTicketRequest());
```

Response JSON example:

```json
{
  "ticketId": "TCK-100001"
}
```

### getTicketInfo

Returns: `AbuseTicketDetailsResponse`

Request code:

```ts
import { Client, Config, GetTicketInfoRequest } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().getTicketInfo(new GetTicketInfoRequest());
```

Response JSON example:

```json
{
  "ticketId": "TCK-100001",
  "type": "PHISHING",
  "source": "203.0.113.10",
  "target": "example.com",
  "closed": false,
  "notes": [
    {
      "message": "Initial report",
      "createdAt": "2026-03-11T12:00:00Z"
    }
  ]
}
```

### getTicketsV2

Returns: `AbuseTicketListResponse`

Request code:

```ts
import { Client, Config, GetTicketsV2Request } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().getTicketsV2(new GetTicketsV2Request());
```

Response JSON example:

```json
{
  "ticketIds": [
    "TCK-100001"
  ],
  "pagination": {
    "total": 1,
    "start": 0,
    "limit": 25
  }
}
```

### createTicketV2

Returns: `AbuseTicketIdResponse`

Request code:

```ts
import { Client, Config, CreateTicketV2Request } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().createTicketV2(new CreateTicketV2Request());
```

Response JSON example:

```json
{
  "ticketId": "TCK-100001"
}
```

### getTicketInfoV2

Returns: `AbuseTicketDetailsResponse`

Request code:

```ts
import { Client, Config, GetTicketInfoV2Request } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().getTicketInfoV2(new GetTicketInfoV2Request());
```

Response JSON example:

```json
{
  "ticketId": "TCK-100001",
  "type": "PHISHING",
  "source": "203.0.113.10",
  "target": "example.com",
  "closed": false,
  "notes": [
    {
      "message": "Initial report",
      "createdAt": "2026-03-11T12:00:00Z"
    }
  ]
}
```

## Exceptions

Service-specific exceptions are under `src/errors/abuse/*` and expose `getErrorResponse()`.
