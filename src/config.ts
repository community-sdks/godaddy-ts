// @ts-nocheck
export class Config {
  constructor({
    apiKey = null,
    apiSecret = null,
    baseUrl = null,
    timeout = 30_000,
    maxRetries = 2,
    retryDelayMs = 200,
    defaultHeaders = {},
    userAgent = 'community-sdks/godaddy-javascript',
    fetchImplementation = globalThis.fetch ? globalThis.fetch.bind(globalThis) : null
  } = {}) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.maxRetries = maxRetries;
    this.retryDelayMs = retryDelayMs;
    this.defaultHeaders = defaultHeaders;
    this.userAgent = userAgent;
    this.fetchImplementation = fetchImplementation;
  }
}
