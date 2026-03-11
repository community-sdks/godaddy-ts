// @ts-nocheck
import {
  AbuseApiException,
  AbuseBadRequestException,
  AbuseUnauthorizedException,
  AbuseForbiddenException,
  AbuseNotFoundException,
  AbuseConflictException,
  AbuseUnprocessableEntityException,
  AbuseRateLimitException,
  AbuseGatewayTimeoutException,
  AbuseServerException,
} from './abuse/index.js';
import {
  AftermarketApiException,
  AftermarketBadRequestException,
  AftermarketUnauthorizedException,
  AftermarketForbiddenException,
  AftermarketNotFoundException,
  AftermarketConflictException,
  AftermarketUnprocessableEntityException,
  AftermarketRateLimitException,
  AftermarketGatewayTimeoutException,
  AftermarketServerException,
} from './aftermarket/index.js';
import {
  AgreementsApiException,
  AgreementsBadRequestException,
  AgreementsUnauthorizedException,
  AgreementsForbiddenException,
  AgreementsNotFoundException,
  AgreementsConflictException,
  AgreementsUnprocessableEntityException,
  AgreementsRateLimitException,
  AgreementsGatewayTimeoutException,
  AgreementsServerException,
} from './agreements/index.js';
import {
  AnsApiException,
  AnsBadRequestException,
  AnsUnauthorizedException,
  AnsForbiddenException,
  AnsNotFoundException,
  AnsConflictException,
  AnsUnprocessableEntityException,
  AnsRateLimitException,
  AnsGatewayTimeoutException,
  AnsServerException,
} from './ans/index.js';
import {
  AuctionsApiException,
  AuctionsBadRequestException,
  AuctionsUnauthorizedException,
  AuctionsForbiddenException,
  AuctionsNotFoundException,
  AuctionsConflictException,
  AuctionsUnprocessableEntityException,
  AuctionsRateLimitException,
  AuctionsGatewayTimeoutException,
  AuctionsServerException,
} from './auctions/index.js';
import {
  CertificatesApiException,
  CertificatesBadRequestException,
  CertificatesUnauthorizedException,
  CertificatesForbiddenException,
  CertificatesNotFoundException,
  CertificatesConflictException,
  CertificatesUnprocessableEntityException,
  CertificatesRateLimitException,
  CertificatesGatewayTimeoutException,
  CertificatesServerException,
} from './certificates/index.js';
import {
  CountriesApiException,
  CountriesBadRequestException,
  CountriesUnauthorizedException,
  CountriesForbiddenException,
  CountriesNotFoundException,
  CountriesConflictException,
  CountriesUnprocessableEntityException,
  CountriesRateLimitException,
  CountriesGatewayTimeoutException,
  CountriesServerException,
} from './countries/index.js';
import {
  DomainsApiException,
  DomainsBadRequestException,
  DomainsUnauthorizedException,
  DomainsForbiddenException,
  DomainsNotFoundException,
  DomainsConflictException,
  DomainsUnprocessableEntityException,
  DomainsRateLimitException,
  DomainsGatewayTimeoutException,
  DomainsServerException,
} from './domains/index.js';
import {
  OrdersApiException,
  OrdersBadRequestException,
  OrdersUnauthorizedException,
  OrdersForbiddenException,
  OrdersNotFoundException,
  OrdersConflictException,
  OrdersUnprocessableEntityException,
  OrdersRateLimitException,
  OrdersGatewayTimeoutException,
  OrdersServerException,
} from './orders/index.js';
import {
  ParkingApiException,
  ParkingBadRequestException,
  ParkingUnauthorizedException,
  ParkingForbiddenException,
  ParkingNotFoundException,
  ParkingConflictException,
  ParkingUnprocessableEntityException,
  ParkingRateLimitException,
  ParkingGatewayTimeoutException,
  ParkingServerException,
} from './parking/index.js';
import {
  ShoppersApiException,
  ShoppersBadRequestException,
  ShoppersUnauthorizedException,
  ShoppersForbiddenException,
  ShoppersNotFoundException,
  ShoppersConflictException,
  ShoppersUnprocessableEntityException,
  ShoppersRateLimitException,
  ShoppersGatewayTimeoutException,
  ShoppersServerException,
} from './shoppers/index.js';
import {
  SubscriptionsApiException,
  SubscriptionsBadRequestException,
  SubscriptionsUnauthorizedException,
  SubscriptionsForbiddenException,
  SubscriptionsNotFoundException,
  SubscriptionsConflictException,
  SubscriptionsUnprocessableEntityException,
  SubscriptionsRateLimitException,
  SubscriptionsGatewayTimeoutException,
  SubscriptionsServerException,
} from './subscriptions/index.js';

const REGISTRY = {
  abuse: {
    default: AbuseApiException,
    badRequest: AbuseBadRequestException,
    unauthorized: AbuseUnauthorizedException,
    forbidden: AbuseForbiddenException,
    notFound: AbuseNotFoundException,
    conflict: AbuseConflictException,
    unprocessableEntity: AbuseUnprocessableEntityException,
    rateLimit: AbuseRateLimitException,
    gatewayTimeout: AbuseGatewayTimeoutException,
    server: AbuseServerException,
  },
  aftermarket: {
    default: AftermarketApiException,
    badRequest: AftermarketBadRequestException,
    unauthorized: AftermarketUnauthorizedException,
    forbidden: AftermarketForbiddenException,
    notFound: AftermarketNotFoundException,
    conflict: AftermarketConflictException,
    unprocessableEntity: AftermarketUnprocessableEntityException,
    rateLimit: AftermarketRateLimitException,
    gatewayTimeout: AftermarketGatewayTimeoutException,
    server: AftermarketServerException,
  },
  agreements: {
    default: AgreementsApiException,
    badRequest: AgreementsBadRequestException,
    unauthorized: AgreementsUnauthorizedException,
    forbidden: AgreementsForbiddenException,
    notFound: AgreementsNotFoundException,
    conflict: AgreementsConflictException,
    unprocessableEntity: AgreementsUnprocessableEntityException,
    rateLimit: AgreementsRateLimitException,
    gatewayTimeout: AgreementsGatewayTimeoutException,
    server: AgreementsServerException,
  },
  ans: {
    default: AnsApiException,
    badRequest: AnsBadRequestException,
    unauthorized: AnsUnauthorizedException,
    forbidden: AnsForbiddenException,
    notFound: AnsNotFoundException,
    conflict: AnsConflictException,
    unprocessableEntity: AnsUnprocessableEntityException,
    rateLimit: AnsRateLimitException,
    gatewayTimeout: AnsGatewayTimeoutException,
    server: AnsServerException,
  },
  auctions: {
    default: AuctionsApiException,
    badRequest: AuctionsBadRequestException,
    unauthorized: AuctionsUnauthorizedException,
    forbidden: AuctionsForbiddenException,
    notFound: AuctionsNotFoundException,
    conflict: AuctionsConflictException,
    unprocessableEntity: AuctionsUnprocessableEntityException,
    rateLimit: AuctionsRateLimitException,
    gatewayTimeout: AuctionsGatewayTimeoutException,
    server: AuctionsServerException,
  },
  certificates: {
    default: CertificatesApiException,
    badRequest: CertificatesBadRequestException,
    unauthorized: CertificatesUnauthorizedException,
    forbidden: CertificatesForbiddenException,
    notFound: CertificatesNotFoundException,
    conflict: CertificatesConflictException,
    unprocessableEntity: CertificatesUnprocessableEntityException,
    rateLimit: CertificatesRateLimitException,
    gatewayTimeout: CertificatesGatewayTimeoutException,
    server: CertificatesServerException,
  },
  countries: {
    default: CountriesApiException,
    badRequest: CountriesBadRequestException,
    unauthorized: CountriesUnauthorizedException,
    forbidden: CountriesForbiddenException,
    notFound: CountriesNotFoundException,
    conflict: CountriesConflictException,
    unprocessableEntity: CountriesUnprocessableEntityException,
    rateLimit: CountriesRateLimitException,
    gatewayTimeout: CountriesGatewayTimeoutException,
    server: CountriesServerException,
  },
  domains: {
    default: DomainsApiException,
    badRequest: DomainsBadRequestException,
    unauthorized: DomainsUnauthorizedException,
    forbidden: DomainsForbiddenException,
    notFound: DomainsNotFoundException,
    conflict: DomainsConflictException,
    unprocessableEntity: DomainsUnprocessableEntityException,
    rateLimit: DomainsRateLimitException,
    gatewayTimeout: DomainsGatewayTimeoutException,
    server: DomainsServerException,
  },
  orders: {
    default: OrdersApiException,
    badRequest: OrdersBadRequestException,
    unauthorized: OrdersUnauthorizedException,
    forbidden: OrdersForbiddenException,
    notFound: OrdersNotFoundException,
    conflict: OrdersConflictException,
    unprocessableEntity: OrdersUnprocessableEntityException,
    rateLimit: OrdersRateLimitException,
    gatewayTimeout: OrdersGatewayTimeoutException,
    server: OrdersServerException,
  },
  parking: {
    default: ParkingApiException,
    badRequest: ParkingBadRequestException,
    unauthorized: ParkingUnauthorizedException,
    forbidden: ParkingForbiddenException,
    notFound: ParkingNotFoundException,
    conflict: ParkingConflictException,
    unprocessableEntity: ParkingUnprocessableEntityException,
    rateLimit: ParkingRateLimitException,
    gatewayTimeout: ParkingGatewayTimeoutException,
    server: ParkingServerException,
  },
  shoppers: {
    default: ShoppersApiException,
    badRequest: ShoppersBadRequestException,
    unauthorized: ShoppersUnauthorizedException,
    forbidden: ShoppersForbiddenException,
    notFound: ShoppersNotFoundException,
    conflict: ShoppersConflictException,
    unprocessableEntity: ShoppersUnprocessableEntityException,
    rateLimit: ShoppersRateLimitException,
    gatewayTimeout: ShoppersGatewayTimeoutException,
    server: ShoppersServerException,
  },
  subscriptions: {
    default: SubscriptionsApiException,
    badRequest: SubscriptionsBadRequestException,
    unauthorized: SubscriptionsUnauthorizedException,
    forbidden: SubscriptionsForbiddenException,
    notFound: SubscriptionsNotFoundException,
    conflict: SubscriptionsConflictException,
    unprocessableEntity: SubscriptionsUnprocessableEntityException,
    rateLimit: SubscriptionsRateLimitException,
    gatewayTimeout: SubscriptionsGatewayTimeoutException,
    server: SubscriptionsServerException,
  },
};

function parseErrorResponse(exception) {
  const body = exception?.responseBody ?? '';
  if (!body || typeof body !== 'string') {
    return null;
  }

  try {
    const parsed = JSON.parse(body);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}

export function mapServiceException(serviceKey, exception) {
  const service = REGISTRY[serviceKey];
  if (!service) {
    return exception;
  }

  const status = exception?.statusCode ?? 0;
  let ExceptionClass = service.default;

  if (status === 400) ExceptionClass = service.badRequest;
  else if (status === 401) ExceptionClass = service.unauthorized;
  else if (status === 403) ExceptionClass = service.forbidden;
  else if (status === 404) ExceptionClass = service.notFound;
  else if (status === 409) ExceptionClass = service.conflict;
  else if (status === 422) ExceptionClass = service.unprocessableEntity;
  else if (status === 429) ExceptionClass = service.rateLimit;
  else if (status === 504) ExceptionClass = service.gatewayTimeout;
  else if (status >= 500) ExceptionClass = service.server;

  return new ExceptionClass(
    exception.message,
    {
      statusCode: exception.statusCode,
      responseBody: exception.responseBody,
      headers: exception.headers,
      requestMethod: exception.requestMethod,
      requestUrl: exception.requestUrl,
    },
    parseErrorResponse(exception)
  );
}
