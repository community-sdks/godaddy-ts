import { BaseRequestDto } from '../../baseRequestDto.js';

export interface GetStatusRequestDtoParams {
  shopperId?: string;
  auditClientIp?: string;
}

export interface GetStatusRequestDtoPathParams {
  [key: string]: unknown;
}

export interface GetStatusRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface GetStatusRequestDtoHeaders {
  [key: string]: unknown;
}

export class GetStatusRequestDto extends BaseRequestDto {
  shopperId?: string;
  auditClientIp?: string;
  constructor({ shopperId, auditClientIp }: GetStatusRequestDtoParams = {}) {
    super();
    this.shopperId = shopperId;
    this.auditClientIp = auditClientIp;
  }
  toPathParams(): GetStatusRequestDtoPathParams {
    return {
      shopperId: this.shopperId,
    };
  }
  toQueryParams(): GetStatusRequestDtoQueryParams {
    return {
      auditClientIp: this.auditClientIp,
    };
  }
  toHeaders(): GetStatusRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
