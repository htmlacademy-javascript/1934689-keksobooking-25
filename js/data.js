import {getRandomNumber} from './util.js';

const massivChekTime = ['12:00', '13:00', '14:00'];

const massivHousing = [
  'place', 'flat', 'house',
  'bungalow', 'hotel'
];

const massivFeatures = [
  'wifi', 'dishwasher', 'parking',
  'washer', 'elevator', 'conditioner'
];

const massivPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getObjNav(a, b) {
  const geoAdress = {
    lat: a,
    lng: b
  };
  return geoAdress;
}

function getHousing(massiwHousing) {
  return massiwHousing[Math.floor(Math.random() *
    massiwHousing.length)];
}

function getTime(massiwChekTime) {
  return massiwChekTime[Math.floor(Math.random() *
    massiwChekTime.length)];
}

function getFeatur() {
  return massivFeatures.slice(0, getRandomNumber (1, 6));
}

function getAlbumPhoto() {
  return massivPhotos.slice(0, getRandomNumber (1, 3));
}

export {getObjNav, getHousing, getTime, getFeatur, getAlbumPhoto, massivChekTime, massivHousing,};
