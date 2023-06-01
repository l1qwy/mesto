import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputs = this._popup.querySelectorAll('.form__field');
    this._submitBtn = this._form.querySelector('.submit');
    this._submitBtnTextDefault = this._submitBtn.textContent;
  }
  
  _getInputValues () {
    this._values = {};
    this._inputs.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  };

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) =>{
      event.preventDefault();
      this._submitBtn.textContent = this._submitBtn.textContent + '...';
      this._submitForm(this._getInputValues());
    })
  };

  resetSubmitBtnText() {
    this._submitBtn.textContent = this._submitBtnTextDefault;
  }

  close () {
    super.close();
  }
};