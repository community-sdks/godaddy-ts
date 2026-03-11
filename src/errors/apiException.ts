// @ts-nocheck
export interface ApiExceptionDetails {
  statusCode?: number;
  responseBody?: string;
  headers?: Record<string, string>;
  requestMethod?: string;
  requestUrl?: string;
}

export class ApiException extends Error {
  statusCode: number;
  responseBody: string;
  headers: Record<string, string>;
  requestMethod: string;
  requestUrl: string;

  constructor(message: string, { statusCode, responseBody, headers, requestMethod, requestUrl }: ApiExceptionDetails = {}) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode ?? 0;
    this.responseBody = responseBody ?? '';
    this.headers = headers ?? {};
    this.requestMethod = requestMethod ?? '';
    this.requestUrl = requestUrl ?? '';
  }

  getRequestId(): string | null {
    return this.headers['X-Request-Id'] ?? this.headers['x-request-id'] ?? null;
  }
}
