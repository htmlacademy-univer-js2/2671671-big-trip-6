import BasicView from './basic-view';


function listViewTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListView extends BasicView {
  get template() {
    return listViewTemplate();
  }
}
