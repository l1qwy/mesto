import './pages/index.css';
import FormValidator from './scripts/formValidator.js';
import Card from './scripts/card.js';
import { initialCards, validation } from './scripts/constants.js';
import Section from './scripts/section.js';
import PopupWithImage from './scripts/popupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/userInfo.js';

// модальные окна
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-item');
const popupEditProfileSelector = '.popup_edit-profile';
const popupAddElementSelector = '.popup_add-item';
const popupScaleImgSelector = '.popup_scale-img';
// кнопки открытия модалок
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
// поля формы в модалке
const formEditProfile = popupEditProfile.querySelector('.form_edit-profile');
const formAddItemGalary = popupAddElement.querySelector('.form-add-item-galery');
// данные пользователя на страинце
const userProfileInfo = {
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__description'
}
// темплейт контент элемента галерии и селектор контейна карточек
const cardTemplate = '#galery-item';
const galeryContainer = '.galery'
// создаем экземпляры валидатора для форм редактирования профиля и добавления карточки
const formEditInstance = new FormValidator (formEditProfile, validation);
formEditInstance.enableValidation();
const formAddInstance = new FormValidator (formAddItemGalary, validation);
formAddInstance.enableValidation();
// создаем экземпляр класса карточки
const createCard = (item) => {
  const card = new Card(item, cardTemplate, openPopupScaleImg);
  return card.generateCard();
}
//наполняем галерею элементами
const galerySection = new Section ({
  items: initialCards,
  renderer: (card) => {
    galerySection.addItem(createCard(card))
  }
}, galeryContainer);
galerySection.generateGalery();
// экземпляр класса для подстановки значений полей в форму и на страницу
const userInfoInstance = new UserInfo (userProfileInfo);
// модалка редактирования профиля
const popupEditInstance = new PopupWithForm (popupEditProfileSelector, (data) => {
  userInfoInstance.setUserInfo(data);
});
popupEditInstance.setEventListeners();
// экземпляр класса добавления карточки
const popupAddInstance = new PopupWithForm(popupAddElementSelector, (data) => {
  galerySection.addItem(createCard(data))
});
popupAddInstance.setEventListeners();
// модалка увеличенного изображения
const popupWithImage = new PopupWithImage(popupScaleImgSelector);
popupWithImage.setEventListeners();
function openPopupScaleImg (initialCards) {
  popupWithImage.openWithImage(initialCards);
};
// обработчик открытия модалки редктирования профиля
popupOpenButtonEditProfile.addEventListener("click", function () {
  formEditInstance.clearErrorsFormFields();
  formEditProfile.querySelector('.form__field_input_name').value = userInfoInstance.getUserInfo().nameProfile;
  formEditProfile.querySelector('.form__field_input_job').value = userInfoInstance.getUserInfo().jobProfile;
  popupEditInstance.open();
});
// обработчик открытия модалки добавления карточки
popupOpenButtonAddElement.addEventListener("click", function () {
  formAddItemGalary.reset();
  formAddInstance.clearErrorsFormFields();
  popupAddInstance.open();
});
