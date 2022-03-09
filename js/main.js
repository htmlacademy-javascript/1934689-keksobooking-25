import {getGLoc, getRandomNumber} from './util.js';
import {getObjNav, getHousing, getTime, getFeatur, getAlbumPhoto, massivChekTime, massivHousing} from './data.js';

// eslint-disable-next-line no-unused-vars
function generatedOffer() {
  const massivObject = [];
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
        checkin: getTime(massivChekTime),
        checkout: getTime(massivChekTime),
        features: getFeatur(),
        description: 'просторная светлая уютная комната',
        photos: getAlbumPhoto()
      },
      location: {
        lat: getGLoc(35.65000, 35.70000),
        lng: getGLoc(139.70000, 139.80000)
      }
    };
    massivObject.push(offer);
  }
  return massivObject;
}
generatedOffer();
