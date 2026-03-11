# Countries Service

Client accessor: `client.countries()`

## Method Index

- [`getCountries`](#getcountries): `GetCountriesResponseDto`
- [`getCountry`](#getcountry): `GetCountryResponseDto`

## Methods

### getCountries

Returns: `GetCountriesResponseDto`

Request code:

```ts
import { Client, Config, GetCountriesRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.countries().getCountries(new GetCountriesRequestDto());
```

Response JSON example:

```json
{
  "countryKey": "US",
  "label": "United States",
  "callingCode": "1"
}
```

### getCountry

Returns: `GetCountryResponseDto`

Request code:

```ts
import { Client, Config, GetCountryRequestDto } from '@community-sdks/godaddy-ts';

const client = new Client(new Config({ apiKey: 'your-key', apiSecret: 'your-secret' }));
const response = await client.countries().getCountry(new GetCountryRequestDto());
```

Response JSON example:

```json
{
  "countryKey": "US",
  "label": "United States",
  "states": [
    {
      "stateKey": "AZ",
      "label": "Arizona"
    }
  ]
}
```

## Exceptions

Service-specific exceptions are under `src/errors/countries/*` and expose `getErrorResponse()`.
