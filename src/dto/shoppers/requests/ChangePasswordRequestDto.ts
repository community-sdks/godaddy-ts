import { BaseRequestDto } from '../../baseRequestDto.js';

export type ChangePasswordRequestDtoSecretType = Record<string, unknown>;

export interface ChangePasswordRequestDtoParams {
  shopperId?: string;
  secret?: ChangePasswordRequestDtoSecretType;
}

export interface ChangePasswordRequestDtoPathParams {
  [key: string]: unknown;
}

export interface ChangePasswordRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface ChangePasswordRequestDtoHeaders {
  [key: string]: unknown;
}

export class ChangePasswordRequestDto extends BaseRequestDto {
  shopperId?: string;
  secret?: ChangePasswordRequestDtoSecretType;
  constructor({ shopperId, secret }: ChangePasswordRequestDtoParams = {}) {
    super();
    this.shopperId = shopperId;
    this.secret = secret;
  }
  toPathParams(): ChangePasswordRequestDtoPathParams {
    return {
      shopperId: this.shopperId,
    };
  }
  toQueryParams(): ChangePasswordRequestDtoQueryParams {
    return {};
  }
  toHeaders(): ChangePasswordRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return this.secret;
  }
  isMultipart(): boolean {
    return false;
  }
}
