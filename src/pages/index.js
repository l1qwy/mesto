import '../pages/index.css';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Сard.js';
import {validation,
  popupEditProfileSelector,
  popupAddElementSelector,
  popupScaleImgSelector,
  popupChangeAvatarSelector,
  popupDeleteCardSelector,
  userProfileInfo,
  cardTemplate,
  galeryContainer} from '../scripts/constants.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';

//экземпляр класса запросов на сервер
const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66/',
  headers: {
    authorization: 'd4c04a33-0990-4ec8-944d-d2a160888358',
    'Content-Type': 'application/json'
  }
});
// модальные окна
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-item');
const popupChangeVatar = document.querySelector('.popup_avatar-profle');
// кнопки открытия модалок
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
const popupOpenChangeAvatar = document.querySelector('.profile__avatar-button');
// поля формы в модалке
const formEditProfile = popupEditProfile.querySelector('.form_edit-profile');
const formAddItemGalary = popupAddElement.querySelector('.form_add-item-galery');
const formChangeAvatar = popupChangeVatar.querySelector('.form_change-avatar');
// создаем экземпляры валидатора для форм редактирования профиля и добавления карточки
const formEditInstance = new FormValidator (formEditProfile, validation);
formEditInstance.enableValidation();
const formAddInstance = new FormValidator (formAddItemGalary, validation);
formAddInstance.enableValidation();
const formChangeInstance = new FormValidator (formChangeAvatar, validation);
formChangeInstance.enableValidation();
// создаем экземпляр класса карточки
const createCard = (cardsInfo) => {
  const card = new Card(cardsInfo, cardTemplate, openPopupScaleImg, openPopupDeleteCard, changeLike);
  function changeLike(likeButton, cardId) {
    if(likeButton.classList.contains('galery__item-emotion_active')){
      api.unactiveLike(cardId)
        .then(res => {
          card.switchLike(res.likes)
        })
        .catch((error => console.error('Ошибка изменения статуса "лайка" ' + error)))
    } else {
      api.activeLike(cardId)
        .then(res => {
          card.switchLike(res.likes)
        })
        .catch((error => console.error('Ошибка изменения статуса "лайка" ' + error)))
    }
  }
  return card.generateCard();
}
const galerySection = new Section ((item) => {
  galerySection.addItem(createCard(item))
  }, galeryContainer);

// модалка редактирования профиля
const popupEditInstance = new PopupWithForm (popupEditProfileSelector, (data) => {
  api.setUserInfoToSrv(data)
    .then(res => {
      userInfoInstance.setUserInfo({
        avatarProfile: res.avatar,
        nameProfile: res.name,
        jobProfile: res.about
      });
      popupEditInstance.close();
    })
    .catch((error => console.error('Ошибка редактирования профиля ' + error)))
    .finally(() => popupEditInstance.resetSubmitBtnText())
});

// экземпляр класса добавления карточки
const popupAddInstance = new PopupWithForm(popupAddElementSelector, (data) => {
  api.addCardToSrv(data)
      .then(cardsInfo => {
      const myId = userInfoInstance.getUserInfo();
      cardsInfo.myId = myId.id;
      galerySection.addItem(createCard(cardsInfo))
      popupAddInstance.close();
    })
    .catch((error) => console.error('Ошибка добавления карточки ' + error))
    .finally(() => popupAddInstance.resetSubmitBtnText())
});

// экземпляр класса увеличенного изображения
const popupWithImage = new PopupWithImage(popupScaleImgSelector);
function openPopupScaleImg (cardsInfo) {
  popupWithImage.openWithImage(cardsInfo);
};

//экземпляр класса для изменения аватара
const popupChangeAvatar = new PopupWithForm(popupChangeAvatarSelector, (data) => {
  api.changeAvatar(data)
    .then(res => {
      userInfoInstance.setUserInfo({
        avatarProfile: res.avatar,
        nameProfile: res.name,
        jobProfile: res.about
    })
    popupChangeAvatar.close();
  })
  .catch((error => console.error('Ошибка обновления аватара профиля ' + error)))
  .finally(() => popupChangeAvatar.resetSubmitBtnText())
});

// экземпляр класса для запроса удаления карточки со страницы и сервера
const popupDeleteCardInstance = new PopupDeleteCard(popupDeleteCardSelector, (item, cardId) => {
  api.deleteCardFromSrv(cardId)
    .then(() => {
      item.deleteCard(item);
      popupDeleteCardInstance.close();
    })
    .catch((error => console.error('Ошибка удаления карточки ' + error)))
    .finally(() => popupDeleteCardInstance.resetSubmitBtnText())
})
function openPopupDeleteCard (item, cardId) {
  popupDeleteCardInstance.open(item, cardId);
}
// обработчик открытия модалки редктирования профиля
popupOpenButtonEditProfile.addEventListener("click", function () {
  formEditInstance.clearErrorsFormFields();
  const profileInfo = userInfoInstance.getUserInfo()
  formEditProfile.nameProfile.value = profileInfo.nameProfile;
  formEditProfile.jobProfile.value = profileInfo.jobProfile;
  popupEditInstance.open();
});
// обработчик открытия модалки добавления карточки
popupOpenButtonAddElement.addEventListener("click", function () {
  formAddInstance.clearErrorsFormFields();
  popupAddInstance.open();
});
// обработчик открытия модалки смены аватара
popupOpenChangeAvatar.addEventListener('click', function () {
  formChangeInstance.clearErrorsFormFields();
  popupChangeAvatar.open()
})

// экземпляр класса для подстановки значений полей в форму и на страницу
const userInfoInstance = new UserInfo (userProfileInfo);
//наполняем галерею карточками с данными сервера
Promise.all([api.getUserInfoFromSrv(), api.getServerCards()])
  .then(([userInfo, cardsInfo]) => {
    cardsInfo.forEach(item =>
      item.myId = userInfo._id)
    userInfoInstance.setUserInfo({
      avatarProfile: userInfo.avatar,
      nameProfile: userInfo.name,
      jobProfile: userInfo.about
    }, userInfo._id)
    galerySection.generateGalery(cardsInfo.reverse());
  })
  .catch((error => console.error('Ошибка при формировании страницы ' + error)));

  // слушатели на созданные экземпляры классов
popupEditInstance.setEventListeners();
popupAddInstance.setEventListeners();
popupWithImage.setEventListeners();
popupChangeAvatar.setEventListeners();
popupDeleteCardInstance.setEventListeners();