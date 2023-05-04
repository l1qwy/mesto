import FormValidator from './FormValidator.js';
import Card from './card.js';
import initialCards from './constants.js';

//модальные окна
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-item');
const popupScaleImg = document.querySelector('.popup_scale-img');
//кнопки открытия модалок
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
//кнопки закрытия модалок
const popupCloseButtonEditProfile = popupEditProfile.querySelector('.popup__close');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup__close');
const popupCloseScaleImg = popupScaleImg.querySelector('.popup__close');
//поля формы в модалке редактирования профиля
const formEditProfile = popupEditProfile.querySelector('.form_edit-profile');
const fieldName = formEditProfile.querySelector('.form__field_input_name');
const fieldJob = formEditProfile.querySelector('.form__field_input_job');
//кнопка сохранить модалки редактирования профиля(для изменения состояния кнопки при открытии модалки)
const saveButtonProfile = formEditProfile.querySelector('.submit')
//элементы профиля на странице
const nameDefault = document.getElementById('name');
const jobDefault = document.getElementById('job');
//темплейт контент элемента галерии
const cardTemplate = '#galery-item';
const galeryItems = document.querySelector('.galery');
//поля форма модалки добавления нового элемента в галерею и ее поля
const formAddItemGalary = popupAddElement.querySelector('.form-add-item-galery');
const galeryItemTitle = popupAddElement.querySelector('.form__field_input_title');
const galeryItemLink = popupAddElement.querySelector('.form__field_input_url');
//модалка увеличенного изображения
const scalingImgGalery = popupScaleImg.querySelector('.popup__scale-img');
const scalingTitleGalery = popupScaleImg.querySelector('.popup__title-img');
//функция открытия модалок
const openPopup = function (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', popupCloseByPressEsc);
};
//фунция закрытия по клику на close и удаление слушателя преса ЭСК
const closePopup = function (popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', popupCloseByPressEsc);
};
//находим модалки и навешиваем функцию закрытия при клике вне
const popupList = document.querySelectorAll('.popup');
popupList.forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
      return; 
    }
     closePopup(popup)
  })
});
// закрытие модалки на esc
const popupCloseByPressEsc = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  };
};
// функция открытия увеличенного изображения элемента
function openPopupScaleImg (initialCards) {
  scalingImgGalery.src = initialCards.link;
  scalingTitleGalery.textContent = initialCards.name;
  scalingImgGalery.alt = 'Увеличенное изображение ' + initialCards.name;
  openPopup(popupScaleImg)
};
//создаем экземпляр класса элемента галерии(карточки)
function createCardGalery (element) {
  const card = new Card(element, cardTemplate, openPopupScaleImg);
  const cardItem = card.generateCard();
  return cardItem;
}
//наполняем страницу карточками
initialCards.forEach((element) => {
  galeryItems.append(createCardGalery(element))
})
// прерываем отправку форми при сабмите, вписываем значения из инпутов модалки редактирования профиля на страницу
function submitFormEditProfile(event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = fieldName.value;
    const jobValue = fieldJob.value;
    // Вставьте новые значения с помощью textContent
    nameDefault.textContent = nameValue;
    jobDefault.textContent = jobValue;
    closePopup(popupEditProfile);
  };
//добавление карточки на страницу через кнопку добавить
function addGaleryItem (event) {
  event.preventDefault();
//прерываем отправку форми при сабмите, добавляем карточку в галерею со значениями инпутов модалки добавления
  const addItem = {
    name: galeryItemTitle.value,
    link: galeryItemLink.value,
    alt: galeryItemTitle.value
  };
  galeryItems.prepend(createCardGalery(addItem));
  event.target.reset();
  closePopup(popupAddElement);
};

//обработчик клика кнопок сабмита модалок
formEditProfile.addEventListener('submit', submitFormEditProfile);
formAddItemGalary.addEventListener('submit', addGaleryItem);
//обработчик закрытия пр клике на клос
popupCloseButtonEditProfile.addEventListener("click", () => closePopup(popupEditProfile));
popupCloseButtonAddElement.addEventListener("click", () => closePopup(popupAddElement));
popupCloseScaleImg.addEventListener("click", () => closePopup(popupScaleImg));
//Валидация форм
// включение валидации вызовом enableValidation
// все настройки передаются при вызове
const validation = ({
  inputSelector: '.form__field',
  submitButtonSelector: '.submit',
  inactiveButtonClass: 'submit_disabled',
  inputErrorClass: 'form__field_error',
  errorClass: 'form__error'
}); 
//создаем экземпляры валидатора для форм реклатирования профиля и добавления карточки
const formEditInstance = new FormValidator (formEditProfile, validation);
formEditInstance.enableValidation();
const formAddInstance = new FormValidator (formAddItemGalary, validation);
formAddInstance.enableValidation();
//обработчик открытия модалки редктирования профиля
popupOpenButtonEditProfile.addEventListener("click", function () {
//удаляем ошибки валидации
formEditInstance.clearErrorsFormFields();
//записываем значения полей на страницы в поля формы
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
//делаем кнопку сохранить активной, так как поля заполнены при открытии
  saveButtonProfile.removeAttribute('disabled');
  saveButtonProfile.classList.remove('submit_disabled');
  openPopup(popupEditProfile);
});
//обработчик открытия модалки добавления карточки
popupOpenButtonAddElement.addEventListener("click", function () {
//очищаем поля формы
  formAddItemGalary.reset();
  //удаляем ошибки валидации
  formAddInstance.clearErrorsFormFields();
  openPopup(popupAddElement);
});