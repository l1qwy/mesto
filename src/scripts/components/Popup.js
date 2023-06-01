export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popup.querySelector('.popup__close');
    this._form = this._popup.querySelector('.form');
  };

  open () {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close = () => {
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    };
  };

  setEventListeners() {
    this._popupCloseBtn.addEventListener("mousedown", this.close) 
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target !== event.currentTarget) {
        return; 
      }
      this.close()
    });
  };
};