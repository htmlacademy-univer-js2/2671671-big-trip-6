import BasicView from './basic-view.js';


const createEditPointTemplate = (point) => `
  <form class="event event--edit">
    <label>
      Type:
      <input type="text" value="${point?.type ?? 'flight'}">
    </label>

    <label>
      Price:
      <input type="number" value="${point?.basePrice ?? 0}">
    </label>

    <button type="submit">Save</button>
  </form>
`;

export default class EditPointView extends BasicView {

  constructor(point = null) {
    super();
    this.point = point;
  }

  get template() {
    return createEditPointTemplate(this.point);
  }
}
