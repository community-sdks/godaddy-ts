import { Response } from '../../src/http/response.js';

export class TestTransport {
  constructor() {
    this.requests = [];
    this.queue = [];
  }

  push(response) {
    this.queue.push(response);
  }

  async send(request) {
    this.requests.push(request);
    return this.queue.shift() ?? new Response({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: '{}'
    });
  }
}
