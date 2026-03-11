# Orders Service

Client accessor: `client.orders()`

## Method Index

- `list`: `ListRequestDto` -> `ListResponseDto`
- `get`: `GetRequestDto` -> `GetResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { ListRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.orders().list(new ListRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
