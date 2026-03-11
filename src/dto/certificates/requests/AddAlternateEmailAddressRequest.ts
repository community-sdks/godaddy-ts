import { BaseRequestDto } from '../../baseRequestDto.js';

export interface AddAlternateEmailAddressRequestParams {
  certificateId?: string;
  emailAddress?: string;
}

export interface AddAlternateEmailAddressRequestPathParams {
  [key: string]: unknown;
}

export interface AddAlternateEmailAddressRequestQueryParams {
  [key: string]: unknown;
}

export interface AddAlternateEmailAddressRequestHeaders {
  [key: string]: unknown;
}

export class AddAlternateEmailAddressRequest extends BaseRequestDto {
  certificateId?: string;
  emailAddress?: string;
  constructor({ certificateId, emailAddress }: AddAlternateEmailAddressRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.emailAddress = emailAddress;
  }
  toPathParams(): AddAlternateEmailAddressRequestPathParams {
    return {
      certificateId: this.certificateId,
      emailAddress: this.emailAddress,
    };
  }
  toQueryParams(): AddAlternateEmailAddressRequestQueryParams {
    return {};
  }
  toHeaders(): AddAlternateEmailAddressRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
