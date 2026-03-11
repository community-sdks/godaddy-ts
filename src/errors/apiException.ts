// @ts-nocheck
export class ApiException extends Error {
  constructor(message, { statusCode, responseBody, headers, requestMethod, requestUrl } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode ?? 0;
    this.responseBody = responseBody ?? '';
    this.headers = headers ?? {};
    this.requestMethod = requestMethod ?? '';
    this.requestUrl = requestUrl ?? '';
  }

  getRequestId() {
    return this.headers['X-Request-Id'] ?? this.headers['x-request-id'] ?? null;
  }
}
