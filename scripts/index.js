//модальные окна
const popupElement = document.querySelector('.popup');
const popupAddElement = document.querySelector('.popup_add-item');
const popupScaleImg = document.querySelector('.popup_scale-img');

//кнопки отккрытия модалок
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
const popupOpenScaleImg = document.querySelector('.galery__img');

//кнопки закрытия модалок
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup__close');
const popupCloseScaleImg = popupScaleImg.querySelector('.popup__close');

//поля формы в модалке редактирования профиля
const formElement = popupElement.querySelector('.form');
const fieldName = formElement.querySelector('.form__field_input_name');
const fieldJob = formElement.querySelector('.form__field_input_job');

//элементы профиля на странице
const nameDefault = document.getElementById('name');
const jobDefault = document.getElementById('job');

//темплейт контент
const galeryTemplate = document.querySelector('#galery-item').content;
const galeryItems = document.querySelector('.galery');

//поля формы модалки добавления нового элемента в галерею
const galeryItemTitle = popupAddElement.querySelector('.form__field_input_title');
const galeryItemLink = popupAddElement.querySelector('.form__field_input_url');

//функция открытия модалки с подстановкой из полей профиля
const openPopup = function () {
  popupElement.classList.add("popup_open");
  //записываем в поля формы данные значения свойства порфиля
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
};

//функция открытия модалки добавления элементов в галерею
const openPopupAddItem = function () {
  popupAddElement.classList.add('popup_open');
};

//функция открытия увеличенного изображения элемента
const openPopupScaleImg = function (element) {

  popupScaleImg.querySelector('.popup__scale-img').src = element.link;
  popupScaleImg.querySelector('.popup__title-img').textContent = element.name;

  popupScaleImg.classList.add('popup_open');
};

//фунция закрытия по клику на close
const closePopup = function () {
  popupScaleImg.classList.remove('popup_open');
  popupAddElement.classList.remove('popup_open');
  popupElement.classList.remove('popup_open');
  
};

// фунция закрытия по клику за пределами модалки
const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return; 
  }
  closePopup();
};

// Обработчик «отправки» формы
function handleFormSubmit(event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = fieldName.value;
    let jobValue = fieldJob.value;

    // Вставьте новые значения с помощью textContent
    nameDefault.textContent = nameValue;
    jobDefault.textContent = jobValue;

    closePopup();
};


//массив элементов
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

//создаем конткнт с данными из массива
function createGaleryItem(element) {
  const galeryElement = galeryTemplate.cloneNode(true);
  //берем данные из массива
  galeryElement.querySelector('.galery__img').src = element.link;
  galeryElement.querySelector('.galery__item-title').textContent = element.name;
  galeryElement.querySelector('.galery__img').alt = 'Изображение: ' + element.name;
  
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
  closePopup();
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

// Прикрепляем обработчики к форме они будут следить за сытием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
popupAddElement.querySelector('.form-add-item-galery').addEventListener('submit', addGaleryItem);

//обработчики кликов
//клики модалки редактирования профиля
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
//клики модалки добавления элемента в галерею
popupOpenButtonAddElement.addEventListener("click", openPopupAddItem);
popupCloseButtonAddElement.addEventListener("click", closePopup);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);
//клики модалки увеличенного изображения элемента галерии
popupCloseScaleImg.addEventListener("click", closePopup);
popupScaleImg.addEventListener('click', closePopupByClickOnOverlay);