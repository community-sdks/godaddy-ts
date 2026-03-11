# Abuse Service

Client accessor: `client.abuse()`

## Method Index

- `getTickets`: `GetTicketsRequest` -> `AbuseTicketListResponse`
- `createTicket`: `CreateTicketRequest` -> `AbuseTicketIdResponse`
- `getTicketInfo`: `GetTicketInfoRequest` -> `AbuseTicketDetailsResponse`
- `getTicketsV2`: `GetTicketsV2Request` -> `AbuseTicketListResponse`
- `createTicketV2`: `CreateTicketV2Request` -> `AbuseTicketIdResponse`
- `getTicketInfoV2`: `GetTicketInfoV2Request` -> `AbuseTicketDetailsResponse`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { GetTicketsRequest } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.abuse().getTickets(new GetTicketsRequest());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
