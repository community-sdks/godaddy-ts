export class BaseResponseDto {
  raw: unknown;

  constructor(raw: unknown = null) {
    this.raw = raw;
  }

  static from<TDto extends BaseResponseDto>(this: new (raw?: unknown) => TDto, raw: unknown): TDto {
    if (raw instanceof this) {
      return raw;
    }

    return new this(raw);
  }
}
