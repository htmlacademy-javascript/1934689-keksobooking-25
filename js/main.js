const MASSIV_OBJECT = [];

function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getGLoc(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

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
function getHousing(housing){
  return housing[Math.floor(Math.random() *
    housing.length)];
}

const massivChekTime = ['12:00', '13:00', '14:00'];

// eslint-disable-next-line no-shadow
function geTime(chekTime){
  return chekTime[Math.floor(Math.random() *
     chekTime.length)];
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

// eslint-disable-next-line no-unused-vars
function generetedOffer() {
  for (let i = 1; i <= 10; i++) {
    const numberPictur = i;
    const offer = {
      author: {
        img: numberPictur === 10 ? `img/avatars/user${numberPictur} .png` : `img/avatars/user${0}${numberPictur} .png` },
      offer: {
        title:'Халява',
        adress: getObjNav((getGLoc(35.65000, 35.70000)), (getGLoc(139.70000, 139.80000))),
        price: getRandomNumber(1, 100,),
        type: getHousing(massivHousing),
        rooms: getRandomNumber(1, 5),
        guests: getRandomNumber(1, 10),
        checkin: geTime(massivChekTime),
        checkout: geTime(massivChekTime),
        features: getFeatur(),
        description: 'просторная светлая уютная комната',
        photos: getAlbumPhoto()
      },
      location: {
        lat: getGLoc(35.65000, 35.70000),
        lng: getGLoc(139.70000, 139.80000)
      }
    };
    MASSIV_OBJECT.push(offer);
  }
  return MASSIV_OBJECT;
}
