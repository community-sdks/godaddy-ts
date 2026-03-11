// @ts-nocheck
import { ApiException, ApiExceptionDetails } from '../apiException.js';

export class ShoppersApiException extends ApiException {
  errorResponse: unknown | null;

  constructor(message: string, details: ApiExceptionDetails = {}, errorResponse: unknown | null = null) {
    super(message, details);
    this.errorResponse = errorResponse;
  }

  getErrorResponse(): unknown | null {
    return this.errorResponse;
  }
}
