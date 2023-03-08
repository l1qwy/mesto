const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const openPopup = function () {
  popupElement.classList.add("popup_open");
};

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

const closePopupByClickOnOverlay = function(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
};

popupOpenButtonElement.addEventListener("click", openPopup);

popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);