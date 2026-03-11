// @ts-nocheck
import { BaseRequestDto } from '../../baseRequestDto.js';

export class GetCertificateSiteSealRequest extends BaseRequestDto {
  constructor({ certificateId, theme, locale } = {}) {
    super();
    this.certificateId = certificateId;
    this.theme = theme;
    this.locale = locale;
  }

  toPathParams() {
    return {
      certificateId: this.certificateId,
    };
  }

  toQueryParams() {
    return {
      theme: this.theme,
      locale: this.locale,
    };
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
