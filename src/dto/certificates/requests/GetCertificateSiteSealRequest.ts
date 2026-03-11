import { BaseRequestDto } from '../../baseRequestDto.js';

export enum GetCertificateSiteSealRequestThemeEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export interface GetCertificateSiteSealRequestParams {
  certificateId?: string;
  theme?: GetCertificateSiteSealRequestThemeEnum;
  locale?: string;
}

export interface GetCertificateSiteSealRequestPathParams {
  [key: string]: unknown;
}

export interface GetCertificateSiteSealRequestQueryParams {
  [key: string]: unknown;
}

export interface GetCertificateSiteSealRequestHeaders {
  [key: string]: unknown;
}

export class GetCertificateSiteSealRequest extends BaseRequestDto {
  certificateId?: string;
  theme?: GetCertificateSiteSealRequestThemeEnum;
  locale?: string;
  constructor({ certificateId, theme, locale }: GetCertificateSiteSealRequestParams = {}) {
    super();
    this.certificateId = certificateId;
    this.theme = theme;
    this.locale = locale;
  }
  toPathParams(): GetCertificateSiteSealRequestPathParams {
    return {
      certificateId: this.certificateId,
    };
  }
  toQueryParams(): GetCertificateSiteSealRequestQueryParams {
    return {
      theme: this.theme,
      locale: this.locale,
    };
  }
  toHeaders(): GetCertificateSiteSealRequestHeaders {
    return {};
  }
  toBody(): unknown {
    return null;
  }
  isMultipart(): boolean {
    return false;
  }
}
