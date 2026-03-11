import { BaseRequestDto } from '../../baseRequestDto.js';

export type CreateSubaccountRequestDtoSubaccountType = Record<string, unknown>;

export interface CreateSubaccountRequestDtoParams {
  subaccount?: CreateSubaccountRequestDtoSubaccountType;
}

export interface CreateSubaccountRequestDtoPathParams {
  [key: string]: unknown;
}

export interface CreateSubaccountRequestDtoQueryParams {
  [key: string]: unknown;
}

export interface CreateSubaccountRequestDtoHeaders {
  [key: string]: unknown;
}

export class CreateSubaccountRequestDto extends BaseRequestDto {
  subaccount?: CreateSubaccountRequestDtoSubaccountType;
  constructor({ subaccount }: CreateSubaccountRequestDtoParams = {}) {
    super();
    this.subaccount = subaccount;
  }
  toPathParams(): CreateSubaccountRequestDtoPathParams {
    return {};
  }
  toQueryParams(): CreateSubaccountRequestDtoQueryParams {
    return {};
  }
  toHeaders(): CreateSubaccountRequestDtoHeaders {
    return {};
  }
  toBody(): unknown {
    return this.subaccount;
  }
  isMultipart(): boolean {
    return false;
  }
}
