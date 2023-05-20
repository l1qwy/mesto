import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector)
    this._popupImg = this._popup.querySelector('.popup__scale-img');
    this._popupImgTitle = this._popup.querySelector('.popup__title-img');
  };

  openWithImage (initialCards) {
    this._popupImg.src = initialCards.link;
    this._popupImgTitle.textContent = initialCards.name;
    this._popupImg.alt = 'Увеличенное изображение ' + name;
    super.open();
  };
};