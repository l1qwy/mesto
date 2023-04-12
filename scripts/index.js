//модальные окна
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-item');
const popupScaleImg = document.querySelector('.popup_scale-img');

//кнопки открытия модалок
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
const popupOpenScaleImg = document.querySelector('.galery__img');

//кнопки закрытия модалок
const popupCloseButtonEditProfile = popupEditProfile.querySelector('.popup__close');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup__close');
const popupCloseScaleImg = popupScaleImg.querySelector('.popup__close');

//поля формы в модалке редактирования профиля
const formEditProfile = popupEditProfile.querySelector('.form_edit-profile');
const fieldName = formEditProfile.querySelector('.form__field_input_name');
const fieldJob = formEditProfile.querySelector('.form__field_input_job');
const editProfileInputs = popupEditProfile.querySelectorAll('.form__field');

//элементы профиля на странице
const nameDefault = document.getElementById('name');
const jobDefault = document.getElementById('job');

//темплейт контент
const galeryTemplate = document.querySelector('#galery-item').content;
const galeryItems = document.querySelector('.galery');

//поля формы модалки добавления нового элемента в галерею
const galeryItemTitle = popupAddElement.querySelector('.form__field_input_title');
const galeryItemLink = popupAddElement.querySelector('.form__field_input_url');
const formAddItemGalary = popupAddElement.querySelector('.form-add-item-galery');
const addItemGaleryInputs = popupAddElement.querySelectorAll('.form__field');

//увеличенное изображение
const scalingImgGalery = popupScaleImg.querySelector('.popup__scale-img');
const scalingTitleGalery = popupScaleImg.querySelector('.popup__title-img');
const scalingAltImgGalery = popupScaleImg.querySelector('.popup__scale-img');

//кнопки субмитов модалок
const formAddElementButton = popupAddElement.querySelector('.submit');
const formEditButton = popupEditProfile.querySelector('.submit');

//функция открытия модалок
const openPopup = function (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', popupCloseByPressEsc);
};

//функция открытия увеличенного изображения элемента
const openPopupScaleImg = function (element) {
  scalingImgGalery.src = element.link;
  scalingTitleGalery.textContent = element.name;
  scalingAltImgGalery.alt = 'Увеличенное изображение ' + element.name;
  popupScaleImg.classList.add('popup_open');
  document.addEventListener('keydown', popupCloseByPressEsc);
};

//фунция закрытия по клику на close и вне модалки
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

// Обработчик «отправки» формы
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

//создаем контент с данными из массива
function createGaleryItem(element) {
  const galeryElement = galeryTemplate.cloneNode(true);
  //берем данные из массива
  const imgElementGalery = galeryElement.querySelector('.galery__img');
  const titleElementGalery = galeryElement.querySelector('.galery__item-title');
  const altImgElementGalery = galeryElement.querySelector('.galery__img');

  imgElementGalery.src = element.link;
  titleElementGalery.textContent = element.name;
  altImgElementGalery.alt = 'Изображение: ' + element.name;
  
  // слушатели удаления и лайка
  galeryElement.querySelector('.galery__delete').addEventListener('click', handleDeleteGaleryItem);
  galeryElement.querySelector('.galery__item-emotion').addEventListener('click', handleEmotionGaleryItem);
  // слушатель открытия изображения
  galeryElement.querySelector('.galery__img').addEventListener("click", () => openPopupScaleImg(element));
  return galeryElement;
}

//дабавляем карточки из массива на страницу
initialCards.forEach(element => {
  const renderGaleryItem = createGaleryItem(element);
  galeryItems.append(renderGaleryItem);
});

//добавление карточки на страницу через кнопку добавить
function addGaleryItem (event) {
  event.preventDefault();
  //берем значиения инпутов из модалки добавления элемента в галерею
  const addItem = createGaleryItem({
    name: galeryItemTitle.value,
    link: galeryItemLink.value,
    alt: galeryItemTitle.value
  });
  galeryItems.prepend(addItem);
  event.target.reset();
  closePopup(popupAddElement);
};

//фунция удаления элемента галерии
function handleDeleteGaleryItem (event) {
  const deleteGaleryItem = event.target.closest('.galery__item');
  deleteGaleryItem.remove();
};

//фунция лайка
function handleEmotionGaleryItem (event) {
  event.target.classList.toggle('galery__item-emotion_active');
};

//обработчики кликов
//обработчики отправки формы(по клику на submit)
formEditProfile.addEventListener('submit', submitFormEditProfile);
formAddItemGalary.addEventListener('submit', addGaleryItem);
//клики модалки редактирования профиля
//открываем
popupOpenButtonEditProfile.addEventListener("click", function () {
//включаем кнопку при открытии, потому что поля всегда заполнены валидно 
  enableButton(formEditButton, { inactiveButtonClass: validation.inactiveButtonClass, activeButtonClass: validation.inactiveButtonClass });
//удаляем ошибки валидации
  clearErrorsFormFields(editProfileInputs, validation.errorClass, validation.inputErrorClass);
//записываем значения полей на страницы в поля формы
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
  openPopup(popupEditProfile);
});

// закрываем на клоус
popupCloseButtonEditProfile.addEventListener("click", () => closePopup(popupEditProfile));

//клики модалки добавления элемента в галерею
// открываем
popupOpenButtonAddElement.addEventListener("click", function () {
//очищаем поля формы
  formAddItemGalary.reset();
  //удаляем ошибки валидации
  clearErrorsFormFields(addItemGaleryInputs, validation.errorClass, validation.inputErrorClass);
  openPopup(popupAddElement);
  // отключаем кнопку при каждом открытии
  disableButton(formAddElementButton, { inactiveButtonClass: validation.inactiveButtonClass, activeButtonClass: validation.inactiveButtonClass });
});

// закрываем на клоус
popupCloseButtonAddElement.addEventListener("click", function () { 
  closePopup(popupAddElement)
});

//клики модалки увеличенного изображения элемента галерии
popupCloseScaleImg.addEventListener("click", () => closePopup(popupScaleImg));

//Валидация форм
// включение валидации вызовом enableValidation
// все настройки передаются при вызове
const validation = ({
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.submit',
  inactiveButtonClass: 'submit_disabled',
  inputErrorClass: 'form__field_error',
  errorClass: 'form__error'
}); 

enableValidation(validation);