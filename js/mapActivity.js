
const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');
const mapFilterSelects = mapFilter.querySelectorAll('select');

const setFormsOff = function() {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  adFormFieldsets.forEach((element) =>{
    element.disabled = true;
  });
  mapFilterSelects.forEach((element) =>{
    element.disabled = true;
  });
  mapFilterFieldsets.forEach((element) =>{
    element.disabled = true;
  });
};

const setFormsOn = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  adFormFieldsets.forEach((item) =>{
    item.disabled = false;});

  mapFilterSelects.forEach((item) =>{
    item.disabled = false;});

  mapFilterFieldsets.forEach((item) =>{
    item.disabled = false;});
};
setFormsOff();
setFormsOn();
