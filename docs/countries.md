# Countries Service

Client accessor: `client.countries()`

## Method Index

- `getCountries`: `GetCountriesRequestDto` -> `GetCountriesResponseDto`
- `getCountry`: `GetCountryRequestDto` -> `GetCountryResponseDto`

## Usage

```js
import { Client, Config } from '../src/index.js';
import { GetCountriesRequestDto } from '../src/index.js';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.countries().getCountries(new GetCountriesRequestDto());
console.log(response.raw);
```

## Response Shape

All response DTOs extend `BaseResponseDto` and expose the decoded payload in `.raw`.
