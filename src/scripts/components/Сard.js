//создаем класс и проводим экспорт, прописываем в конструктор массив данных карточек, селектор шаблона карточки, ссылку на функцию открытия модалки увеличенного изображения
//прописываем свойства
export default class Card {
  constructor (cardsInfo, cardTemplate, openPopupScaleImg, openPopupDeleteCard, changeLike) {
    this._obj = cardsInfo;
    this._cardTemplate = cardTemplate;
    this._openPopupScaleImg = openPopupScaleImg;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._changeLike = changeLike;
  }
//получаем контент шаблона карточки
  _getTemplate() {
    const galeryElement = document.querySelector(this._cardTemplate).content.querySelector('.galery__item').cloneNode(true);
    return galeryElement;
  }
//прописываем свойства для метода создания карточек
  generateCard() {
    this._name = this._obj.name;
    this._link = this._obj.link;
    this._myId = this._obj.myId;
    this._ownerId = this._obj.owner._id;
    this._cardId = this._obj._id
    this._likes = this._obj.likes;
    this._likesLength = this._obj.likes.length;
    this._templateElement = this._getTemplate();
    this._cardImg = this._templateElement.querySelector('.galery__img');
    this._templateElement.querySelector('.galery__item-title').textContent = this._obj.name;
    this._cardImg.alt = 'Изображение: ' + this._obj.name;
    this._cardImg.src = this._obj.link;
    this._likeButton = this._templateElement.querySelector('.galery__item-emotion');
    this._likesCounter = this._templateElement.querySelector('.galery__counter')
    this._deleteCard = this._templateElement.querySelector('.galery__delete');
    this._compareId();
    this._counterLike();
    this._setEventListeners();

    return this._templateElement;
  }

  _handleDeleteGaleryItem = () => {
    this._openPopupDeleteCard(this, this._cardId);
  }
  
  _compareId () {
    if(this._myId !== this._ownerId) {
      this._deleteCard.style.visibility = 'hidden'
    };
  }

  deleteCard () {
    this._templateElement.remove();
  }

  _handleEmotionGaleryItem = () => {
    this._changeLike(this._likeButton, this._cardId);
  }

  _counterLike () {
    this._likes.forEach(item => {
      if(item._id  === this._myId) {
        this._likeButton.classList.toggle('galery__item-emotion_active');
        return;
      }
    })
    this._likesCounter.textContent = this._likes.length;
  }

  switchLike(likes) {
    this._likeButton.classList.toggle('galery__item-emotion_active');
    this._likesCounter.textContent = likes.length;
  }

  _scaleGaleryImg = () => {
    this._openPopupScaleImg(this._obj);
  }

  _setEventListeners() {
    this._deleteCard.addEventListener('click', this._handleDeleteGaleryItem);
    this._likeButton.addEventListener('click', this._handleEmotionGaleryItem);
    this._cardImg.addEventListener('click', this._scaleGaleryImg);
  }
};