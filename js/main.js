function nubmersRange(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.trunc(min + Math.random() * (max + 1 - min));
  }
  return 0;
}
nubmersRange(1, 25);

function floatPointRange(min, max, point) {
  if (min >= 0 && max >= 0 && min < max) {
    const generatedNumber = min + Math.random() * (max + 1 - min);
    return generatedNumber.toFixed(point);
  }
  return 0;
}
floatPointRange(0, 20.5, 3);
