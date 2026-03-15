export default class BasicView {

  #element = null;

  get template() {
    throw new Error('Abstract method not implemented');
  }

  get element() {
    if (!this.#element) {
      const container = document.createElement('div');
      container.innerHTML = this.template.trim();
      this.#element = container.firstChild;
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
