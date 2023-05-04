//создаем класс и проводим экспорт, прописываем в конструктор массив даннвх карточек, селектор шаблона карточки, ссылку на функцию открытия модалки увеличенного изображения
//прописываем свойства
export default class Card {
  constructor (initialCards, cardTemplate, openPopupScaleImg) {
    this._initialCards = initialCards;
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._cardTemplate = cardTemplate;
    this._openPopupScaleImg = openPopupScaleImg;
  }
//получаем контент шаблона карточки
  _getTemplate() {
    const galeryElement = document.querySelector(this._cardTemplate).content.querySelector('.galery__item').cloneNode(true);
    return galeryElement;
  }
//прописываем свойства для метода создания карточек
  generateCard() {
    this._templateElement = this._getTemplate();
    this._cardImg = this._templateElement.querySelector('.galery__img');
    this._cardTitle = this._templateElement.querySelector('.galery__item-title')
    this._cardTitle.textContent = this._name;
    this._cardImg.alt = 'Изображение: ' + this._name;
    this._cardImg.src = this._link;
    this._likeButton = this._templateElement.querySelector('.galery__item-emotion');
    this._deleteCard = this._templateElement.querySelector('.galery__delete');
    this._scaleImg = this._templateElement.querySelector('.galery__img');
    this._setEventListeners();

    return this._templateElement;
  }
//навешиваем слушатели 
  _setEventListeners() {
    this._deleteCard.addEventListener('click', this._handleDeleteGaleryItem);
    this._likeButton.addEventListener('click', this._handleEmotionGaleryItem);
    this._cardImg.addEventListener('click', this._scaleGaleryImg);
  }
//методы удаления, лайка, увеличенного изображения
  _handleDeleteGaleryItem = () => {
    this._templateElement.remove();
  }

  _handleEmotionGaleryItem = () => {
    this._likeButton.classList.toggle('galery__item-emotion_active');
  }

  _scaleGaleryImg = () => {
    this._openPopupScaleImg(this._initialCards);
  }
};