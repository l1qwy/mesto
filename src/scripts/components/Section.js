export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items,
    this._renderer = renderer,
    this._container = document.querySelector(containerSelector)
  };

  generateGalery () {
    this._initialCards.forEach(item => {
      this._renderer(item)
    })
  };

  addItem(data) {
    this._container.prepend(data)
  }
};