import {createPoint} from './route-point.js';
import {createDestination} from './destination.js';
import {createOffer} from './offer.js';
import {generateDestinations, generateOffers, generatePoints} from '../mock/mock.js';

export default class PointsModel {

  constructor() {
    this.destinations = generateDestinations();
    this.offers = generateOffers();
    this.points = generatePoints(this.destinations, this.offers);
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
};
