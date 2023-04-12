const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    setEventListeners(form, rest)
  })
};

setEventListeners = (form, { inputSelector, submitButtonSelector, errorClass, inputErrorClass, ...rest }) => {
  const formInputs = Array.from(form.querySelectorAll(inputSelector));
  const formButton = form.querySelector(submitButtonSelector);
  formInputs.forEach(input =>  {
    input.addEventListener('input', () => {
      checkInputValidity(input, errorClass, inputErrorClass)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest)
      } else {
        enableButton(formButton, rest)
      }
    })
  });
};

checkInputValidity = (input, errorClass, inputErrorClass) => {
  const inputErrorContainer = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    hideFieldError(input, inputErrorContainer, errorClass, inputErrorClass)
  } else {
    visibleFieldError(input, inputErrorContainer, errorClass, inputErrorClass)
  }
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
};

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
};

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
};

const visibleFieldError = (input, inputErrorContainer, errorClass, inputErrorClass) => {
  inputErrorContainer.textContent = input.validationMessage;
  inputErrorContainer.classList.add(inputErrorClass)
  input.classList.add(errorClass);
};

const hideFieldError = (input, inputErrorContainer, errorClass, inputErrorClass) => {
  inputErrorContainer.textContent = '';
  inputErrorContainer.classList.remove(inputErrorClass)
  input.classList.remove(errorClass);
};

const clearErrorsFormFields = function(inputs, errorClass, inputErrorClass) {
  inputs.forEach(input => {
    const inputsErrorContainer = document.querySelector(`#${input.id}-error`);
    hideFieldError(input, inputsErrorContainer, errorClass, inputErrorClass,)
  })
}