import {generatedOffer} from './main.js';

const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapConvas = document.querySelector('#map-canvas');

const TYPE_BILDINGS = {
  'bungalow':'Бунгало' ,
  'place': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом' ,
  'hotel':  'Отель'
};

function setTextContent(node, content) {
  if (content) {
    node.textContent = content;
  } else {
    node.remove();
  }
}

function getLocationMessege(adressLocation) {
  return `${adressLocation.lat} ${adressLocation.lng}`;
}

function setChekInAndOutTime (checkin, checkout) {
  return `Заезд после ${checkin}, выезд до ${checkout}`;
}

function getNodLi (features) {
  const li = document.createElement('li');
  li.classList.add('popup__feature');
  li.classList.add(`${features}`);

  return li;
}

function getNodFeature (node, massivFeatures) {
  if (massivFeatures.length) {
    node.innerHTML = '';

    for (let i = 0; i < massivFeatures.length; i++) {
      node.append(getNodLi(`popup__feature--${massivFeatures[i]}`));
    }
  } else {
    node.remove();
  }
}

function getPhotoElement (node, massivPhotos) {
  if (massivPhotos.length > 0) {
    node.innerHTML= '';

    for (let i = 0; i < massivPhotos.length; i++) {
      const newImg = massivPhotos[i];
      node.insertAdjacentHTML('beforeend', `<img src="${newImg}
        "class="popup__photo" width="45" height="40" alt="Фотография жилья" >`);
    }
  } else {
    node.remove();
  }
}

function setPhotoAvatar(node, img) {
  if (img) {
    node.setAttribute('src', img);
  } else {
    node.remove();
  }
}

function getCountRooms(countRooms) {
  if (countRooms === 1) {
    countRooms = `${countRooms} комната`;
  } else if (countRooms > 1 && countRooms < 5) {
    countRooms = `${countRooms} комнаты`;
  } else {
    countRooms = `${countRooms} комнат`;}

  return countRooms;
}

function getCountGuest (countGuest) {
  if (countGuest === 1) {
    countGuest = `${countGuest} гостя`;
  } else {
    countGuest = `${countGuest} гостей`;
  }

  return countGuest;
}

function setRoomsAndGuest(quests, rooms) { // передать в эту функцию количекство комнат и гостей
  return `${getCountRooms(rooms)} ${getCountGuest(quests)}`; //функцию getCountRooms передать количествыо комнат , getCountGuest передать количество гостей
}

function getCardOffer(offerElement) {
  const objectOffer = cardOfferTemplate.cloneNode(true);
  const {checkin, checkout, guests, rooms, adress, title, price, description, features, photos, type} = offerElement.offer;
  const location = getLocationMessege(adress);

  setTextContent(objectOffer.querySelector('.popup__text--address'), location);
  setTextContent(objectOffer.querySelector('.popup__title'), title );
  setTextContent(objectOffer.querySelector('.popup__text--price'), `${price} Р/ночь`);
  setTextContent(objectOffer.querySelector('.popup__description'), description);
  setTextContent(objectOffer.querySelector('.popup__type'), TYPE_BILDINGS[type]);
  setTextContent(objectOffer.querySelector('.popup__text--time'), setChekInAndOutTime(checkin, checkout));
  setTextContent(objectOffer.querySelector('.popup__text--capacity'), setRoomsAndGuest(guests, rooms));

  getNodFeature(objectOffer.querySelector('.popup__features'), features);
  setPhotoAvatar(objectOffer.querySelector('.popup__avatar'), offerElement.author.img);
  getPhotoElement( objectOffer.querySelector('.popup__photos'), photos);

  mapConvas.append(objectOffer);
}
const offers = generatedOffer();
getCardOffer(offers[1]);
