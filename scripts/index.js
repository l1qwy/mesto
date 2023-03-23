//Открытие, зыкрытие модального окна редактирования
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

//Открытие, зыкрытие модального окна добавления в галерею
const popupAddElement = document.querySelector('.popup_add-item');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup__close');

//Открытие модального окна увеличенного изображения
const popupScaleImg = document.querySelector('.popup_scale-img');
const popupOpenScaleImg = document.querySelector('.galery__img');
const popupCloseScaleImg = popupScaleImg.querySelector('.popup__close');

//открытие с подстановкой из полей профиля
const openPopup = function () {
  popupElement.classList.add("popup_open");
  //записываем в поля формы данные значения свойства порфиля
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
};

const openPopupAddItem = function () {
  popupAddElement.classList.add('popup_open');
};

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

//находим форму и поля в модалке
let formElement = popupElement.querySelector('.form');
let fieldName = formElement.querySelector('.form__field_input_name');
let fieldJob = formElement.querySelector('.form__field_input_job');

//находми элементы профиля
let nameDefault = document.getElementById('name');
let jobDefault = document.getElementById('job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
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

const galeryTemplate = document.querySelector('#galery-item').content;
const galeryItems = document.querySelector('.galery');
const galeryItemTitle = popupAddElement.querySelector('.form__field_input_title');
const galeryItemLink = popupAddElement.querySelector('.form__field_input_url');

//создаем конткнт с данными из массива
function createGaleryItem(element) {
  const galeryElement = galeryTemplate.cloneNode(true);
  //берем данные из массива
  galeryElement.querySelector('.galery__img').src = element.link;
  galeryElement.querySelector('.galery__item-title').textContent = element.name;
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

// Прикрепляем обработчики к форме:
// они будут следить за сытием “submit” - «отправка»
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