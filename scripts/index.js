//Открытие, зыкрытие модального окна
//находим элементы
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

//добавляем фунцию для отображения модального окна
//находим форму и поля в модалке
let formElement = popupElement.querySelector('.form');
let fieldName = formElement.querySelector('.form__field_input_name');
let fieldJob = formElement.querySelector('.form__field_input_job');

//находми элементы профиля
let nameDefault = document.getElementById('name');
let jobDefault = document.getElementById('job');

const openPopup = function () {
  popupElement.classList.add("popup_open");
  //записываем в поля формы данные значения свойства порфиля
  fieldName.value = nameDefault.textContent;
  fieldJob.value = jobDefault.textContent;
};

//фунция закрытия по клику на close
const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

// фунция закрытия по клику за пределами модалки
const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return; 
  }
  closePopup();
};

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

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
//обработчики кликов
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


// реализация сердечка, испытание toggle
//const emotionElements = document.querySelector('.galery__item-emotion');

//const toggleEmotion = function () {
//  emotionElements.classList.toggle('galery__item-emotion_active');
//};

//emotionElements.addEventListener('click', toggleEmotion);

