export default class Section {
  constructor(renderer, containerSelector) {
    // this._initialCards = items,
    this._renderer = renderer,
    this._container = document.querySelector(containerSelector)
  };

  generateGalery (cardsInfo) {
    cardsInfo.forEach(item => {
      this._renderer(item)
    })
  };

  addItem(data) {
    this._container.prepend(data)
  }
};