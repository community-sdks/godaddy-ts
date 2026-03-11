// @ts-nocheck
import { ApiException } from '../apiException.js';

export class AnsApiException extends ApiException {
  constructor(message, details = {}, errorResponse = null) {
    super(message, details);
    this.errorResponse = errorResponse;
  }

  getErrorResponse() {
    return this.errorResponse;
  }
}
