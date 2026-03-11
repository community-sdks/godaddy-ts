// @ts-nocheck
export class Response {
  constructor({ statusCode, headers = {}, body = '' }) {
    this.statusCode = statusCode;
    this.headers = headers;
    this.body = body;
  }
}
