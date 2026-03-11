# Agreements Service

Client accessor: `client.agreements()`

## Method Index

- `get`: `GetRequestDto` -> `GetResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { GetRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.agreements().get(new GetRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
