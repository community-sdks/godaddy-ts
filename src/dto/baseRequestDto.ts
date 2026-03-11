export class BaseRequestDto {
  static from<TDto extends BaseRequestDto>(this: new (...args: any[]) => TDto, value: unknown): TDto {
    if (value instanceof this) {
      return value;
    }

    if (value && typeof value === 'object') {
      return new this(value as any);
    }

    return new this();
  }

  toPathParams(): Record<string, unknown> {
    return {};
  }

  toQueryParams(): Record<string, unknown> {
    return {};
  }

  toHeaders(): Record<string, unknown> {
    return {};
  }

  toBody(): unknown {
    return null;
  }

  isMultipart(): boolean {
    return false;
  }
}
