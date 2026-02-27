import { ApiKeyAuth } from './auth/apiKeyAuth.js';
import { ApiException } from './errors/apiException.js';
import { NotFoundException } from './errors/notFoundException.js';
import { RateLimitException } from './errors/rateLimitException.js';
import { ServerException } from './errors/serverException.js';
import { UnauthorizedException } from './errors/unauthorizedException.js';
import { ValidationException } from './errors/validationException.js';
import { FetchTransport } from './http/fetchTransport.js';
import { Request } from './http/request.js';

export class ApiClient {
  config;
  transport;

  constructor(config, transport = null) {
    this.config = config;
    this.transport = transport ?? new FetchTransport(config.fetchImplementation);
  }

  static buildQueryString(query) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item !== null && item !== undefined) {
            params.append(key, ApiClient.stringify(item));
          }
        }
        continue;
      }

      params.append(key, ApiClient.stringify(value));
    }

    return params.toString();
  }

  async request({ method, serviceBaseUrl, path, pathParams = {}, queryParams = {}, headers = {}, body = null, multipart = false }) {
    const request = new Request({
      method,
      url: `${(this.config.baseUrl ?? serviceBaseUrl).replace(/\/$/, '')}${this.interpolatePath(path, pathParams)}`,
      headers: this.buildHeaders(headers, body, multipart),
      query: this.filterNulls(queryParams),
      body,
      multipart,
      timeout: this.config.timeout
    });

    const response = await this.sendWithRetry(request);
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw this.mapException(request, response);
    }

    return this.decodeResponse(response);
  }

  buildHeaders(headers, body, multipart) {
    const resolved = {
      Accept: 'application/json',
      'User-Agent': this.config.userAgent,
      ...this.config.defaultHeaders,
      ...this.filterNulls(headers),
      ...ApiKeyAuth.headers(this.config)
    };

    if (body !== null && body !== undefined && !resolved['Content-Type']) {
      resolved['Content-Type'] = multipart ? 'multipart/form-data' : 'application/json';
    }

    return resolved;
  }

  filterNulls(values) {
    return Object.fromEntries(
      Object.entries(values ?? {}).filter(([, value]) => value !== null && value !== undefined)
    );
  }

  async sendWithRetry(request) {
    let attempt = 0;
    while (true) {
      const response = await this.transport.send(request);
      if (!this.shouldRetry(response, attempt)) {
        return response;
      }

      await this.sleepBeforeRetry(response, attempt);
      attempt += 1;
    }
  }

  shouldRetry(response, attempt) {
    if (attempt >= this.config.maxRetries) {
      return false;
    }

    return [408, 429, 500, 502, 503, 504].includes(response.statusCode);
  }

  async sleepBeforeRetry(response, attempt) {
    const retryAfter = response.headers['retry-after'] ?? response.headers['Retry-After'] ?? null;
    let delay = this.config.retryDelayMs * (2 ** attempt);
    if (retryAfter && /^\d+$/.test(String(retryAfter))) {
      delay = Number(retryAfter) * 1000;
    } else {
      delay += Math.floor(Math.random() * Math.max(1, delay / 4));
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  interpolatePath(path, pathParams) {
    let resolved = path;
    for (const [key, value] of Object.entries(pathParams ?? {})) {
      resolved = resolved.replace(`{${key}}`, encodeURIComponent(ApiClient.stringify(value)));
    }
    return resolved;
  }

  decodeResponse(response) {
    if (!response.body) {
      return null;
    }

    const contentType = (response.headers['content-type'] ?? response.headers['Content-Type'] ?? '').toLowerCase();
    const trimmed = response.body.trimStart();
    if (contentType.includes('json') || trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        return JSON.parse(response.body);
      } catch {
        return response.body;
      }
    }

    return response.body;
  }

  mapException(request, response) {
    const details = {
      statusCode: response.statusCode,
      responseBody: response.body,
      headers: response.headers,
      requestMethod: request.method,
      requestUrl: request.fullUrl()
    };

    if (response.statusCode === 400) return new ValidationException('GoDaddy API request failed with status 400', details);
    if (response.statusCode === 401 || response.statusCode === 403) return new UnauthorizedException(`GoDaddy API request failed with status ${response.statusCode}`, details);
    if (response.statusCode === 404) return new NotFoundException('GoDaddy API request failed with status 404', details);
    if (response.statusCode === 429) return new RateLimitException('GoDaddy API request failed with status 429', details);
    if (response.statusCode >= 500) return new ServerException(`GoDaddy API request failed with status ${response.statusCode}`, details);

    return new ApiException(`GoDaddy API request failed with status ${response.statusCode}`, details);
  }

  static stringify(value) {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    if (Array.isArray(value) || (typeof value === 'object' && !(value instanceof Date))) {
      return JSON.stringify(value);
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

    return String(value);
  }
}
