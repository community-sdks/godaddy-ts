// @ts-nocheck
export class BaseRequestDto {
  static from(value) {
    if (value instanceof this) {
      return value;
    }

    if (value && typeof value === 'object') {
      return new this(value);
    }

    return new this();
  }

  toPathParams() {
    return {};
  }

  toQueryParams() {
    return {};
  }

  toHeaders() {
    return {};
  }

  toBody() {
    return null;
  }

  isMultipart() {
    return false;
  }
}
