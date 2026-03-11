// @ts-nocheck
export class BaseResponseDto {
  constructor(raw = null) {
    this.raw = raw;
  }

  static from(raw) {
    if (raw instanceof this) {
      return raw;
    }

    return new this(raw);
  }
}
