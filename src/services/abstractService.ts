// @ts-nocheck
import { ApiException } from '../errors/apiException.js';
import { mapServiceException } from '../errors/serviceExceptionMapper.js';

export class AbstractService {
  constructor(client, baseUrl) {
    this.client = client;
    this.baseUrl = baseUrl;
    this.serviceKey = this.constructor.name.replace(/Service$/, '').toLowerCase();
  }

  async call(method, path, options = {}) {
    try {
      return await this.client.request({
        method,
        serviceBaseUrl: this.baseUrl,
        path,
        ...options
      });
    } catch (error) {
      if (!(error instanceof ApiException)) {
        throw error;
      }

      throw mapServiceException(this.serviceKey, error);
    }
  }
}
