import { ApiClient } from './apiClient.js';
import { Config } from './config.js';
import { AbuseService } from './services/abuseService.js';
import { AftermarketService } from './services/aftermarketService.js';
import { AgreementsService } from './services/agreementsService.js';
import { AnsService } from './services/ansService.js';
import { AuctionsService } from './services/auctionsService.js';
import { CertificatesService } from './services/certificatesService.js';
import { CountriesService } from './services/countriesService.js';
import { DomainsService } from './services/domainsService.js';
import { OrdersService } from './services/ordersService.js';
import { ParkingService } from './services/parkingService.js';
import { ShoppersService } from './services/shoppersService.js';
import { SubscriptionsService } from './services/subscriptionsService.js';

export class Client {
  apiClient;
  _abuse;
  _aftermarket;
  _agreements;
  _ans;
  _auctions;
  _certificates;
  _countries;
  _domains;
  _orders;
  _parking;
  _shoppers;
  _subscriptions;

  constructor(config = new Config(), transport = null) {
    this.apiClient = new ApiClient(config, transport);
    this._abuse = new AbuseService(this.apiClient);
    this._aftermarket = new AftermarketService(this.apiClient);
    this._agreements = new AgreementsService(this.apiClient);
    this._ans = new AnsService(this.apiClient);
    this._auctions = new AuctionsService(this.apiClient);
    this._certificates = new CertificatesService(this.apiClient);
    this._countries = new CountriesService(this.apiClient);
    this._domains = new DomainsService(this.apiClient);
    this._orders = new OrdersService(this.apiClient);
    this._parking = new ParkingService(this.apiClient);
    this._shoppers = new ShoppersService(this.apiClient);
    this._subscriptions = new SubscriptionsService(this.apiClient);
  }

  apiClientInstance() {
    return this.apiClient;
  }

  abuse() {
    return this._abuse;
  }

  aftermarket() {
    return this._aftermarket;
  }

  agreements() {
    return this._agreements;
  }

  ans() {
    return this._ans;
  }

  auctions() {
    return this._auctions;
  }

  certificates() {
    return this._certificates;
  }

  countries() {
    return this._countries;
  }

  domains() {
    return this._domains;
  }

  orders() {
    return this._orders;
  }

  parking() {
    return this._parking;
  }

  shoppers() {
    return this._shoppers;
  }

  subscriptions() {
    return this._subscriptions;
  }
}
