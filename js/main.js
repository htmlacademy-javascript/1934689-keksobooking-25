function nubmersRange(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    const generatedNumber = Math.trunc(min + Math.random() * (max + 1 - min));
    return generatedNumber;
  }

}
nubmersRange();

function floatPointRange(min, max, point) {
  if (min >= 0 && max >= 0 && min < max) {
    let generatedNumber = min + Math.random() * (max + 1 - min);
    generatedNumber = generatedNumber.toFixed(point);
    return generatedNumber;
  }

}

floatPointRange();
