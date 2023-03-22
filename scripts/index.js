//Открытие, зыкрытие модального окна редактирования
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

//Открытие, зыкрытие модального окна добавления в галерею
const popupAddElement = document.querySelector('.popup_add-item');
const popupOpenButtonAddElement = document.querySelector('.profile__add-item-button');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup__close');


//открытие с подстановкой из полей профиля
const openPopup = function () {
  popupElement.classList.add("popup_open");
  //записываем в поля формы данные значения свойства порфиля
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
};

const openPopupAddItem = function () {
  popupAddElement.classList.add("popup_open");
};

//фунция закрытия по клику на close
const closePopup = function () {
  popupAddElement.classList.remove("popup_open");
  popupElement.classList.remove("popup_open");
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

// реализация сердечка
//const itemEmotion = document.querySelectorAll('.galery__item-emotion');
//let like = document.querySelector('.galery__item-emotion');
//like.addEventListener('click', () => 
//like.classList.toggle('galery__item-emotion_active'));

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

const galeryTemplate = document.querySelector('#galery-item').content;
const galeryItems = document.querySelector('.galery');


function createGaleryItem(data) {
  const galeryElement = galeryTemplate.cloneNode(true);

  galeryElement.querySelector('.galery__img').src = data.link;
  galeryElement.querySelector('.galery__item-title').textContent = data.name;

  return galeryElement;
}

initialCards.forEach(element => {
  const renderGaleryItem = createGaleryItem(element);
  galeryItems.append(renderGaleryItem);
});

function addGaleryItem (event) {
  console.log(event);
  event.preventDefault();
  
    const addItem = createGaleryItem({
      name: popupAddElement.querySelector('.form__field_input_title').value,
      link: popupAddElement.querySelector('.form__field_input_url').value
    });

  galeryItems.prepend(addItem);
  
  event.target.reset();

  closePopup();
};
popupAddElement.querySelector('.form-add-item-galery').addEventListener('submit', addGaleryItem);


//function setEventListeners () {
  //popupAddElement.querySelector('.form-add-item-galery').addEventListener('submit', handleAddGaleryItem);
  //galeryItems.querySelector('.galery__delete').addEventListener('click', hadleDeleteItem);
  //popupAddElement.querySelector('.submit').addEventListener('click', handleAddItem);
  //galeryElement.querySelector('.galery__item-emotion').addEventListener('.click', handleLikeItem);
//};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

//обработчики кликов
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

popupOpenButtonAddElement.addEventListener("click", openPopupAddItem);
popupCloseButtonAddElement.addEventListener("click", closePopup);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);