// @ts-nocheck
export class Request {
  constructor({ method, url, headers = {}, query = {}, body = null, multipart = false, timeout = 30_000 }) {
    this.method = method;
    this.url = url;
    this.headers = headers;
    this.query = query;
    this.body = body;
    this.multipart = multipart;
    this.timeout = timeout;
  }

  fullUrl() {
    const suffix = new URLSearchParams();
    for (const [key, value] of Object.entries(this.query)) {
      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item !== null && item !== undefined) {
            suffix.append(key, String(item));
          }
        }
        continue;
      }

      suffix.append(key, String(value));
    }

    const query = suffix.toString();
    return query ? `${this.url}?${query}` : this.url;
  }
}
