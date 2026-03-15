import {render, RenderPosition} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import RoutePointView from '../view/route-point-view.js';
import EditFormView from '../view/edit-form-view.js';
import CreateFormView from '../view/create-form-view.js';


export default class BoardPresenter {
  constructor() {
    this.filtersContainer = document.querySelector('.trip-controls__filters');
    this.tripEventsContainer = document.querySelector('.trip-events');
  }

  init() {

    render(new FiltersView(), this.filtersContainer, RenderPosition.BEFOREEND);

    render(new SortView(), this.tripEventsContainer, RenderPosition.BEFOREEND);

    const listView = new ListView();
    render(listView, this.tripEventsContainer, RenderPosition.BEFOREEND);

    const listElement = listView.getElement();

    render(new EditFormView(), listElement, RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new RoutePointView(), listElement, RenderPosition.BEFOREEND);
    }
  }
}
