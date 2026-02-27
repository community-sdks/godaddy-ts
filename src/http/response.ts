export class Response {
  statusCode;
  headers;
  body;

  constructor({ statusCode, headers = {}, body = '' }) {
    this.statusCode = statusCode;
    this.headers = headers;
    this.body = body;
  }
}
