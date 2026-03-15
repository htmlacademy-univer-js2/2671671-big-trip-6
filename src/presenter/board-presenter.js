import CreateModel from '../model/create-model.js';
import RoutePointView from '../view/route-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {

  constructor(container) {
    this.container = container;
    this.createModel = new CreateModel();
  }

  init() {

    const points = this.CreateModel.getPoints();

    points.forEach((point) => {
      const pointComponent = new RoutePointView(point);
      render(pointComponent, this.container);
    });
  }
}
