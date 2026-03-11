# Shoppers Service

Client accessor: `client.shoppers()`

## Method Index

- [`createSubaccount`](#createsubaccount): `CreateSubaccountResponseDto`
- [`get`](#get): `GetResponseDto`
- [`update`](#update): `UpdateResponseDto`
- [`delete`](#delete): `DeleteResponseDto`
- [`getStatus`](#getstatus): `GetStatusResponseDto`
- [`changePassword`](#changepassword): `ChangePasswordResponseDto`

## Methods

### createSubaccount

Returns: `CreateSubaccountResponseDto`

Request code:

```ts
import { Client, Config, CreateSubaccountRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().createSubaccount(new CreateSubaccountRequestDto());
```

Response JSON example:

```json
{
  "shopperId": "987654321",
  "customerId": "123456789"
}
```

### get

Returns: `GetResponseDto`

Request code:

```ts
import { Client, Config, GetRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().get(new GetRequestDto());
```

Response JSON example:

```json
{
  "shopperId": "987654321",
  "nameFirst": "Jane",
  "nameLast": "Doe",
  "email": "admin@example.com",
  "marketId": "en-US",
  "customerId": "123456789"
}
```

### update

Returns: `UpdateResponseDto`

Request code:

```ts
import { Client, Config, UpdateRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().update(new UpdateRequestDto());
```

Response JSON example:

```json
{
  "shopperId": "987654321",
  "customerId": "123456789"
}
```

### delete

Returns: `DeleteResponseDto`

Request code:

```ts
import { Client, Config, DeleteRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().delete(new DeleteRequestDto());
```

Response JSON example:

```json
{
  "deleted": true
}
```

### getStatus

Returns: `GetStatusResponseDto`

Request code:

```ts
import { Client, Config, GetStatusRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().getStatus(new GetStatusRequestDto());
```

Response JSON example:

```json
{
  "billingState": "ACTIVE"
}
```

### changePassword

Returns: `ChangePasswordResponseDto`

Request code:

```ts
import { Client, Config, ChangePasswordRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().changePassword(new ChangePasswordRequestDto());
```

Response JSON example:

```json
{
  "shopperId": "987654321",
  "customerId": "123456789"
}
```

## Exceptions

Service-specific exceptions are under `src/errors/shoppers/*` and expose `getErrorResponse()`.
