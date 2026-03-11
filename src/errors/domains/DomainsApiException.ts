// @ts-nocheck
import { ApiException } from '../apiException.js';

export class DomainsApiException extends ApiException {
  constructor(message, details = {}, errorResponse = null) {
    super(message, details);
    this.errorResponse = errorResponse;
  }

  getErrorResponse() {
    return this.errorResponse;
  }
}
