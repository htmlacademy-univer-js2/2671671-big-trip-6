import BasicView from './basic-view.js';


const createRoutePointTemplate = (point) => `
  <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        ${point.type}
      </div>

      <div class="event__price">
        € ${point.basePrice}
      </div>

      <button class="event__favorite-btn
      ${point.isFavorite ? 'event__favorite-btn--active' : ''}">
        ★
      </button>
    </div>
  </li>
`;

export default class RoutePointView extends BasicView {

  constructor(point) {
    super();
    this.point = point;
  }

  get template() {
    return createRoutePointTemplate(this.point);
  }
}
