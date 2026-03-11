import { BaseRequestDto } from '../../baseRequestDto.js';

export interface DeleteRequestDtoParams {
  shopperId?: string;
  auditClientIp?: string;
}

export interface DeleteRequestDtoPathParams {
  [key: string]: unknown;
}

export interface DeleteRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface DeleteRequestDtoHeaders {
  [key: string]: unknown;
}

export class DeleteRequestDto extends BaseRequestDto {
  shopperId?: string;
  auditClientIp?: string;
  constructor({ shopperId, auditClientIp }: DeleteRequestDtoParams = {}) {
    super();
    this.shopperId = shopperId;
    this.auditClientIp = auditClientIp;
  }
  toPathParams(): DeleteRequestDtoPathParams {
    return {
      shopperId: this.shopperId,
    };
  }
  toQueryParams(): DeleteRequestDtoQueryParams {
    return {
      auditClientIp: this.auditClientIp,
    };
  }
  toHeaders(): DeleteRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
