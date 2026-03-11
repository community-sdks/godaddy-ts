# Agreements Service

Client accessor: `client.agreements()`

## Method Index

- [`get`](#get): `GetResponseDto`

## Methods

### get

Returns: `GetResponseDto`

Request code:

```ts
import { Client, Config, GetRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.agreements().get(new GetRequestDto());
```

Response JSON example:

```json
{
  "agreementKey": "DNRA",
  "title": "Domain Name Registration Agreement",
  "url": "https://www.godaddy.com/legal/agreements/domain-registration"
}
```

## Exceptions

Service-specific exceptions are under `src/errors/agreements/*` and expose `getErrorResponse()`.
