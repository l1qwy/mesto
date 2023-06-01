//создаем класс валидатора и экспортируем
//в конструтор прописываем формы модалок и свойства конфига валидации
export default class FormValidator {
  constructor (form, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass })
  {
    this._form = form;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._formInputs = form.querySelectorAll(this._inputSelector);
    this._formButton = form.querySelector(this._submitButtonSelector);
  }
//функция валидации полей формы и кнопок формы
  enableValidation () {
    this._setEventListeners();
  };
//метод слушателя инпутов с дизеблом и энейблом кнопок сабмитов
  _setEventListeners () {
    this._formInputs.forEach(input =>  {
      input.addEventListener('input', () => {
        this._checkInputValidity(input, this._errorClass, this._inputErrorClass)
        if (this._hasInvalidInput()) {
          this._disableButton()
        } else {
          this._enableButton()
        }
      })
    });
  };
//если валидно скрываем ошибки, если нет - наоборот
  _checkInputValidity (input) {
    if (input.checkValidity()) {
      this._hideFieldError (input);
    } else {
      this._visibleFieldError (input);
    }
  };
//проверка валидности
  _hasInvalidInput () {
    // console.log(this._formInputs)
    return Array.from(this._formInputs).some(item => !item.validity.valid);
  };
//активация кнопки сохранения
  _enableButton () {
    this._formButton.classList.remove(this._inactiveButtonClass);
    this._formButton.removeAttribute('disabled');
  };
//дизактивация кнопки сохранения
  _disableButton () {
    this._formButton.classList.add(this._inactiveButtonClass);
    this._formButton.setAttribute('disabled', true);
  };
//показ ошибок
  _visibleFieldError (input) {
    const inputErrorContainer = this._form.querySelector(`#${input.id}-error`);
    inputErrorContainer.textContent = input.validationMessage;
    inputErrorContainer.classList.add(this._inputErrorClass);
    input.classList.add(this._errorClass);
  };
//скрытие ошибок
  _hideFieldError (input) {
    const inputErrorContainer = this._form.querySelector(`#${input.id}-error`);
    inputErrorContainer.textContent = '';
    inputErrorContainer.classList.remove(this._inputErrorClass);
    input.classList.remove(this._errorClass);
  };
//очистка ошибок
  clearErrorsFormFields () {
    this._formInputs.forEach(input => {
      if (!input.validity.valid) {
        this._hideFieldError(input);
      }
    })
      this._disableButton()
  }
};