export class ApiException extends Error {
  statusCode;
  responseBody;
  headers;
  requestMethod;
  requestUrl;

  constructor(
    message,
    details: {
      statusCode?: number;
      responseBody?: string;
      headers?: Record<string, string>;
      requestMethod?: string;
      requestUrl?: string;
    } = {}
  ) {
    super(message);
    const { statusCode, responseBody, headers, requestMethod, requestUrl } = details;
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
