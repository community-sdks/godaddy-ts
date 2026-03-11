# Shoppers Service

Client accessor: `client.shoppers()`

## Method Index

- `createSubaccount`: `CreateSubaccountRequestDto` -> `CreateSubaccountResponseDto`
- `get`: `GetRequestDto` -> `GetResponseDto`
- `update`: `UpdateRequestDto` -> `UpdateResponseDto`
- `delete`: `DeleteRequestDto` -> `DeleteResponseDto`
- `getStatus`: `GetStatusRequestDto` -> `GetStatusResponseDto`
- `changePassword`: `ChangePasswordRequestDto` -> `ChangePasswordResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { CreateSubaccountRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.shoppers().createSubaccount(new CreateSubaccountRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
