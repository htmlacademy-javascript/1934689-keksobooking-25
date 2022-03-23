import {getRandomNumber} from './util.js';

function getObjNav(a, b) {
  const geoAdress = {
    lat: a,
    lng: b
  };
  return geoAdress;
}

const massivHousing = [
  'place', 'flat', 'house',
  'bungalow', 'hotel'
];


// eslint-disable-next-line no-shadow
function getHousing(massivHousing) {
  return massivHousing[Math.floor(Math.random() *
    massivHousing.length)];
}

const massivChekTime = ['12:00', '13:00', '14:00'];

// eslint-disable-next-line no-shadow
function getTime(massivChekTime) {
  return massivChekTime[Math.floor(Math.random() *
    massivChekTime.length)];
}

const massivFeatures = [
  'wifi', 'dishwasher', 'parking',
  'washer', 'elevator', 'conditioner'
];

function getFeatur() {
  massivFeatures.slice([0], [getRandomNumber (1, 6)]);
  return massivFeatures;
}

const massivPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getAlbumPhoto() {
  massivPhotos.slice([0], [getRandomNumber (1, 3)]);
  return massivPhotos;
}

export {getObjNav, getHousing, getTime, getFeatur, getAlbumPhoto, massivChekTime, massivHousing,};
