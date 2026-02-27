export class ApiKeyAuth {
  static headers(config) {
    if (!config.apiKey || !config.apiSecret) {
      return {};
    }

    return {
      Authorization: `sso-key ${config.apiKey}:${config.apiSecret}`
    };
  }
}
