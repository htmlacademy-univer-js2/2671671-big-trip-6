import {POINT_TYPES, CITIES, DESCRIPTION} from '../const.js';
import {createPoint} from '../model/route-point.js';
import {createDestination} from '../model/destination.js';
import {createOffer} from '../model/offer.js';


const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomPrice = () =>
  Math.floor(Math.random() * 500);

const getRandomBoolean = () =>
  Math.random() > 0.5;

export const generateDestinations = () =>
  CITIES.map((city, index) =>
    createDestination({
      id: String(index + 1),
      name: city,
      description: DESCRIPTION,
      pictures: [
        {
          src: `https://loremflickr.com/248/152?random=${index}`,
          description: city
        }
      ]
    })
  );

export const generateOffers = () =>
  POINT_TYPES.map((type, index) =>
    createOffer({
      id: String(index + 1),
      type,
      title: 'Add luggage',
      price: getRandomPrice()
    })
  );

export const generatePoints = (destinations, offers, count = 5) =>
  Array.from({length: count}, (_, index) =>
    createPoint({
      id: String(index + 1),
      type: getRandomItem(POINT_TYPES),
      destination: destinations[Math.floor(Math.random() * destinations.length)].id,
      dateFrom: new Date(),
      dateTo: new Date(Date.now() + 3600000),
      basePrice: getRandomPrice(),
      isFavorite: getRandomBoolean(),
      offers: offers.slice(0, 2).map((o) => o.id)
    })
  );
