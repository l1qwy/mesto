import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitBtn = this._form.querySelector('.submit');
    this._submitBtnTextDefault = this._submitBtn.textContent;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
    this._submitBtn.textContent = this._submitBtn.textContent + '...';
    event.preventDefault();
    this._submitForm(this._item, this._cardId)
    })
  }

  open = (item, cardId) => {
    super.open();
    this._item = item;
    this._cardId = cardId;
  }

  resetSubmitBtnText() {
    this._submitBtn.textContent = this._submitBtnTextDefault;
  }
}