(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r){var n=r.inputSelector,o=r.submitButtonSelector,i=r.inactiveButtonClass,u=r.inputErrorClass,l=r.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._inputSelector=n,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=u,this._errorClass=l,this._formInputs=t.querySelectorAll(this._inputSelector),this._formButton=t.querySelector(this._submitButtonSelector)}var r,n;return r=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._formInputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,e._errorClass,e._inputErrorClass),e._hasInvalidInput()?e._disableButton():e._enableButton()}))}))}},{key:"_checkInputValidity",value:function(e){e.checkValidity()?this._hideFieldError(e):this._visibleFieldError(e)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._formInputs).some((function(e){return!e.validity.valid}))}},{key:"_enableButton",value:function(){this._formButton.classList.remove(this._inactiveButtonClass),this._formButton.removeAttribute("disabled")}},{key:"_disableButton",value:function(){this._formButton.classList.add(this._inactiveButtonClass),this._formButton.setAttribute("disabled",!0)}},{key:"_visibleFieldError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass)}},{key:"_hideFieldError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass)}},{key:"clearErrorsFormFields",value:function(){var e=this;this._formInputs.forEach((function(t){t.validity.valid||e._hideFieldError(t)})),this._disableButton()}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var l=function(){function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleDeleteGaleryItem",(function(){o._templateElement.remove()})),i(this,"_handleEmotionGaleryItem",(function(){o._likeButton.classList.toggle("galery__item-emotion_active")})),i(this,"_scaleGaleryImg",(function(){o._openPopupScaleImg(o._obj)})),this._obj=t,this._cardTemplate=r,this._openPopupScaleImg=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".galery__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._templateElement=this._getTemplate(),this._cardImg=this._templateElement.querySelector(".galery__img"),this._templateElement.querySelector(".galery__item-title").textContent=this._obj.name,this._cardImg.alt="Изображение: "+this._obj.name,this._cardImg.src=this._obj.link,this._likeButton=this._templateElement.querySelector(".galery__item-emotion"),this._deleteCard=this._templateElement.querySelector(".galery__delete"),this._setEventListeners(),this._templateElement}},{key:"_setEventListeners",value:function(){this._deleteCard.addEventListener("click",this._handleDeleteGaleryItem),this._likeButton.addEventListener("click",this._handleEmotionGaleryItem),this._cardImg.addEventListener("click",this._scaleGaleryImg)}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a={inputSelector:".form__field",submitButtonSelector:".submit",inactiveButtonClass:"submit_disabled",inputErrorClass:"form__field_error",errorClass:"form__error"};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var f=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"generateGalery",value:function(){var e=this;this._initialCards.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function m(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var v=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"close",(function(){r._popup.classList.remove("popup_open"),document.removeEventListener("keydown",r._handleEscClose)})),m(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),this._popup=document.querySelector(t),this._popupCloseBtn=this._popup.querySelector(".popup__close")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseBtn.addEventListener("mousedown",this.close),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},_.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(o){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__scale-img"),t._popupImgTitle=t._popup.querySelector(".popup__title-img"),t}return t=u,(r=[{key:"openWithImage",value:function(e){this._popupImg.src=e.link,this._popupImgTitle.textContent=e.name,this._popupImg.alt="Увеличенное изображение "+name,_(S(u.prototype),"open",this).call(this)}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},P.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(o){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitForm=t,r._form=r._popup.querySelector(".form"),r._inputs=r._popup.querySelectorAll(".form__field"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;P(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){P(O(u.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,B(n.key),n)}}function B(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}var q=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){i._userName.textContent=e.nameProfile,i._userJob.textContent=e.jobProfile},(n=B(n="setUserInfo"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._userName=document.querySelector(t.userNameSelector),this._userJob=document.querySelector(t.userJobSelector)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{nameProfile:this._userName.textContent,jobProfile:this._userJob.textContent}}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=document.querySelector(".popup_edit-profile"),x=document.querySelector(".popup_add-item"),R=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-item-button"),G=T.querySelector(".form_edit-profile"),V=x.querySelector(".form-add-item-galery"),D=new r(G,a);D.enableValidation();var N=new r(V,a);N.enableValidation();var A=function(e){return new l(e,"#galery-item",H).generateCard()},J=new f({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){J.addItem(A(e))}},".galery");J.generateGalery();var U=new q({userNameSelector:".profile__name",userJobSelector:".profile__description"}),W=new C(".popup_edit-profile",(function(e){U.setUserInfo(e)}));W.setEventListeners();var z=new C(".popup_add-item",(function(e){J.addItem(A(e))}));z.setEventListeners();var M=new w(".popup_scale-img");function H(e){M.openWithImage(e)}M.setEventListeners(),R.addEventListener("click",(function(){D.clearErrorsFormFields();var e=U.getUserInfo();G.nameProfile.value=e.nameProfile,G.jobProfile.value=e.jobProfile,W.open()})),F.addEventListener("click",(function(){V.reset(),N.clearErrorsFormFields(),z.open()}))})();