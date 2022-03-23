import {generatedOffer} from './main.js';
import {getTime} from './data.js';

const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapConvas = document.querySelector('#map-canvas');

function getCardOffer() {
  const objectOffer = cardOfferTemplate.cloneNode(true);
  const offerElement = getTime(generatedOffer());

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

  const location = getLocationMessege(offerElement.offer.adress);

  setTextContent(objectOffer.querySelector('.popup__text--address'), location);

  setTextContent(objectOffer.querySelector('.popup__title'), offerElement.offer.title );

  setTextContent(objectOffer.querySelector('.popup__text--price'), `${offerElement.offer.price} Р/ночь`);

  const TYPE_BILDINGS = {
    'bungalow':'Бунгало' ,
    'place': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом' ,
    'hotel':  'Отель'
  };
  objectOffer.querySelector('.popup__type').textContent = TYPE_BILDINGS[offerElement.offer.type];

  function getCountRooms(countRooms) {
    countRooms = offerElement.offer.rooms;
    if (countRooms === 1) {
      countRooms = `${countRooms} комната`;
    } else if (countRooms > 1 && countRooms < 5) {
      countRooms = `${countRooms} комнаты`;
    } else {
      countRooms = `${countRooms} комнат`;}
    return countRooms;
  }

  function getCountGuest (countGuest) {
    countGuest = offerElement.offer.guests;
    if (countGuest === 1) {
      countGuest = `${countGuest} гостя`;
    } else {
      countGuest = `${countGuest} гостей`;
    }
    return countGuest;
  }

  function setRoomsAndGuest() {
    objectOffer.querySelector('.popup__text--capacity').textContent
    =`${getCountRooms()} ${getCountGuest()}`;
  }
  setRoomsAndGuest();

  function getCheckIn(countChakIn) {
    countChakIn = offerElement.offer.checkin;
    return countChakIn;
  }

  function getCheckOut(countChakOut) {
    countChakOut = offerElement.offer.checkout;
    return countChakOut;
  }

  function setChakInAndOutTime () {
    objectOffer.querySelector('.popup__text--time').textContent
    =`Заезд после ${getCheckIn()}, выезд до ${getCheckOut()}`;
  }
  setChakInAndOutTime ();

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
  getNodFeature(objectOffer.querySelector('.popup__features'), offerElement.offer.features);

  setTextContent(objectOffer.querySelector('.popup__description'), offerElement.offer.description);

  function getPhotoElement (node, massivPhotos) {
    objectOffer.querySelector('.popup__photo').remove();
    if (massivPhotos.length > 0) {
      for (let i = 0; i < massivPhotos.length; i++) {
        const newImg = massivPhotos[i];
        node.insertAdjacentHTML('beforeend', `<img src="${newImg}
        "class="popup__photo" width="45" height="40" alt="Фотография жилья" >`);
      }
    } else {
      objectOffer.querySelector('.popup__photos').remove();
    }
  }
  getPhotoElement( objectOffer.querySelector('.popup__photos'), offerElement.offer.photos);

  function setPhotoAvatar(node, img) {
    if (img) {
      node.setAttribute('src', img);
    } else {
      node.remove();
    }
  }
  setPhotoAvatar(objectOffer.querySelector('.popup__avatar'), offerElement.author.img);

  cardOfferTemplate.appendChild(objectOffer );

  mapConvas.append(objectOffer);
}

getCardOffer(generatedOffer(), 1);
