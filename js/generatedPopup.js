import {generatedOffer} from './main.js';
import {getTime} from './data.js';

const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapConvas = document.querySelector('#map-canvas');

function getCardOffer() {
  const objectOffer = cardOfferTemplate.cloneNode(true);
  const offerElement = getTime(generatedOffer());

  if (offerElement.offer.title) {
    objectOffer.querySelector('.popup__title').textContent = offerElement.offer.title;
  } else {
    objectOffer.querySelector('.popup__title').remove();
  }

  if (offerElement.offer.adress) {
    objectOffer.querySelector('.popup__text--address').textContent = offerElement.offer.adress;
  } else {
    objectOffer.querySelector('.popup__text--address').remove();
  }

  if (offerElement.offer.price) {
    objectOffer.querySelector('.popup__text--price').textContent = `${offerElement.offer.price} Р/ночь`;
  } else {
    objectOffer.querySelector('.popup__text--price').remove();
  }

  if (offerElement.offer.type) {
    if (offerElement.offer.type === 'bungalow') {
      objectOffer.querySelector('.popup__type').textContent = 'Бунгало';
    } else if (offerElement.offer.type === 'place') {
      objectOffer.querySelector('.popup__type').textContent = 'Дворец';
    } else if (offerElement.offer.type === 'flat') {
      objectOffer.querySelector('.popup__type').textContent = 'Квартира';
    } else if (offerElement.offer.type === 'house') {
      objectOffer.querySelector('.popup__type').textContent = 'Дом';
    } else {
      objectOffer.querySelector('.popup__type').textContent = 'Отель';
    }
  } else {
    objectOffer.querySelector('.popup__type').remove();
  }


  if (offerElement.offer.rooms === 1 && offerElement.offer.guests === 1 ) {
    objectOffer.querySelector('.popup__text--capacity').textContent = `${offerElement.offer.rooms}
    комната для ${offerElement.offer.guests} гостя.`;
  } else if (offerElement.offer.rooms === 1 && offerElement.offer.guests > 1) {
    objectOffer.querySelector('.popup__text--capacity').textContent = `${offerElement.offer.rooms}
    комната для ${offerElement.offer.guests} гостей.`;
  } else if (offerElement.offer.rooms > 1 && offerElement.offer.guests === 1) {
    objectOffer.querySelector('.popup__text--capacity').textContent = `${offerElement.offer.rooms}
    комнаты для ${offerElement.offer.guests} гостя.`;
  } else {
    objectOffer.querySelector('.popup__text--capacity').textContent = `${offerElement.offer.rooms}
    комнаты для ${offerElement.offer.guests} гостей.`;
  }

  if (offerElement.offer.checkin && offerElement.offer.checkout) {
    objectOffer.querySelector('.popup__text--time').textContent = `Заезд после ${offerElement.offer.checkin},
    выезд до ${offerElement.offer.checkout}`;
  } else {
    objectOffer.querySelector('.popup__text--time').remove();
  }

  if (offerElement.offer.features) {
    objectOffer.querySelector('.popup__feature--wifi').textContent = offerElement.offer.features;
    objectOffer.querySelector('.popup__feature--dishwasher').textContent = offerElement.offer.features;
    objectOffer.querySelector('.popup__feature--parking').textContent = offerElement.offer.features;
    objectOffer.querySelector('.popup__feature--washer').textContent = offerElement.offer.features;
    objectOffer.querySelector('.popup__feature--elevator').textContent = offerElement.offer.features;
    objectOffer.querySelector('.popup__feature--conditioner').textContent = offerElement.offer.features;
  } else {
    objectOffer.querySelector('.popup__features').remove();
  }

  if (offerElement.offer.description) {
    objectOffer.querySelector('.popup__description').textContent = offerElement.offer.description;
  } else {
    objectOffer.querySelector('.popup__description').remove();
  }

  if (offerElement.offer.photos) {
    objectOffer.querySelector('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${offerElement.offer.photos[0]}
  "class="popup__photo" width="45" height="40" alt="Фотография жилья" ><img src="${offerElement.offer.photos[1]}
  "class="popup__photo" width="45" height="40" alt="Фотография жилья" ><img src="${offerElement.offer.photos[2]}
  "class="popup__photo" width="45" height="40" alt="Фотография жилья" >`);
    objectOffer.querySelector('.popup__photo').remove();
  } else {
    objectOffer.querySelector('.popup__photos').remove();
  }

  if (offerElement.author.img) {
    objectOffer.querySelector('.popup__avatar').setAttribute('src', offerElement.author.img);
  } else {
    objectOffer.querySelector('.popup__avatar').remove();
  }

  cardOfferTemplate.appendChild(objectOffer );

  mapConvas.append(objectOffer);
}

getCardOffer(generatedOffer(), 1);
