# Auctions Service

Client accessor: `client.auctions()`

## Method Index

- `placeBids`: `PlaceBidsRequestDto` -> `PlaceBidsResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { PlaceBidsRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.auctions().placeBids(new PlaceBidsRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
