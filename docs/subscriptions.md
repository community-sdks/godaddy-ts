# Subscriptions Service

Client accessor: `client.subscriptions()`

## Method Index

- `list`: `ListRequestDto` -> `ListResponseDto`
- `productGroups`: `ProductGroupsRequestDto` -> `ProductGroupsResponseDto`
- `cancel`: `CancelRequestDto` -> `CancelResponseDto`
- `get`: `GetRequestDto` -> `GetResponseDto`
- `update`: `UpdateRequestDto` -> `UpdateResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { ListRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.subscriptions().list(new ListRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
