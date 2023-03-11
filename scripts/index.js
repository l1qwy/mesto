//Открытие, зыкрытие модального окна
//находим элементы
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

//добавляем фунцию для отображения модального окна
const openPopup = function () {
  popupElement.classList.add("popup_open");
};

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return; 
  }
  closePopup();
};

//обработчики кликов
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


//Отправка формы
// Находим форму в DOM
let formElement = popupElement.querySelector('.form');
console.log(formElement)
// Находим поля формы в DOM
let nameInput = formElement.querySelector('name');
let jobInput = formElement.querySelector('job');

console.log(nameInput);
console.log(jobInput);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.


    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = document.getElementsByTagName('input')[0].value;
    let jobValue = document.getElementsByTagName('input')[1].value;


    // Выберите элементы, куда должны быть вставлены значения полей
    let nameOutput = document.querySelector('.profile__name');
    console.log(nameOutput.textContent); 

    let jobOutput = document.querySelector('.profile__description');
    console.log(jobOutput.textContent); 
    
    
    // Вставьте новые значения с помощью textContent
    nameOutput.textContent = nameValue;
    console.log(nameOutput.textContent);

    jobOutput.textContent = jobValue;
    console.log(jobOutput.textContent); 

    closePopup();

};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


// реализация сердечка, испытание toggle
const emotionElements = document.querySelector('.galery__item-emotion');
console.log(emotionElements);

const toggleEmotion = function () {
  emotionElements.classList.toggle('galery__item-emotion_active');
};

emotionElements.addEventListener('click', toggleEmotion);

