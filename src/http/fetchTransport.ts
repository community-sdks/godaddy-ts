import { Response } from './response.js';

export class FetchTransport {
  fetchImplementation;

  constructor(fetchImplementation) {
    this.fetchImplementation = fetchImplementation ?? null;
  }

  async send(request) {
    if (!this.fetchImplementation) {
      throw new Error('No fetch implementation is available. Provide config.fetchImplementation or use an environment with global fetch.');
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), request.timeout);

    try {
      const init: RequestInit = {
        method: request.method,
        headers: { ...request.headers },
        signal: controller.signal
      };

      if (request.body !== null && request.body !== undefined) {
        if (request.multipart && typeof FormData !== 'undefined' && typeof request.body === 'object' && !Array.isArray(request.body)) {
          const form = new FormData();
          for (const [key, value] of Object.entries(request.body)) {
            if (value === null || value === undefined) {
              continue;
            }

            if (Array.isArray(value)) {
              for (const item of value) {
                form.append(key, String(item));
              }
            } else {
              form.append(key, String(value));
            }
          }
          init.body = form;
          delete (init.headers as Record<string, string>)['Content-Type'];
        } else if (typeof request.body === 'string' || request.body instanceof Uint8Array || request.body instanceof ArrayBuffer) {
          init.body = request.body;
        } else if ((init.headers as Record<string, string>)['Content-Type']?.includes('application/x-www-form-urlencoded')) {
          init.body = new URLSearchParams(request.body).toString();
        } else {
          init.body = JSON.stringify(request.body);
        }
      }

      const response = await this.fetchImplementation(request.fullUrl(), init);
      const headers = {};
      for (const [key, value] of response.headers.entries()) {
        headers[key] = value;
      }

      return new Response({
        statusCode: response.status,
        headers,
        body: await response.text()
      });
    } finally {
      clearTimeout(timeoutId);
    }
  }
}
