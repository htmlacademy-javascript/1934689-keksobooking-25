const MASSIV_OBJECT = [];
function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getGeoLocation (a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}
const geoPointOne = getGeoLocation(35.65000, 35.70000);
const geoPointTwo = getGeoLocation(139.70000, 139.80000);
// console.log(geoPointTwo)
const housing = [
  'place', 'flat', 'house',
  'bungalow', 'hotel'
];

// eslint-disable-next-line no-shadow
function getHousing(housing){
  return housing[Math.floor(Math.random() * housing.length)];
}

const chekTime = ['12:00', '13:00', '14:00'];

// eslint-disable-next-line no-shadow
function geTime(chekTime){
  return chekTime[Math.floor(Math.random() * chekTime.length)];
}

const features = [
  'wifi', 'dishwasher', 'parking',
  'washer', 'elevator', 'conditioner'
];
const featur = features.slice([0], [getRandomNumber (1, 6)]);

const albumPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const flbumPhoto = albumPhotos.slice([0], [getRandomNumber (1, 3)]);

for (let i = 1; i <= 10; i++) {
  const numberPictur = i;
  const object = {};
  MASSIV_OBJECT.push(object);
  object.author = {};
  object.author.img = numberPictur === 10 ? `img/avatars/user${numberPictur} .png` :
    `img/avatars/user${0}${numberPictur} .png`;
  object.offer = {};
  object.offer.title = 'Халява';
  object.offer.adress = `${geoPointOne}, ${geoPointTwo}` ;
  object.offer.price = getRandomNumber(1, 100);
  object.offer.type = getHousing(housing);
  object.offer.rooms = getRandomNumber(1, 5);
  object.offer.guests = getRandomNumber(1, 10);
  object.offer.checkin = geTime(chekTime);
  object.offer.checkout = geTime(chekTime);
  object.offer.features = featur;
  object.offer.description = 'просторная светлая уютная комната';
  object.offer.photos = flbumPhoto;
  object.location = {};
  object.location.lat = getGeoLocation(35.65000, 35.70000);
  object.location.lng = getGeoLocation(139.70000, 139.80000);
}
