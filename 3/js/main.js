// первая функция по заданию
function numbersRange(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    let generatedNumber = Math.trunc(min + Math.random() * (max + 1 - min));
    console.log('Результат: ' + generatedNumber + ' из диапазона' + ' от ' + min + ' до ' + max);
    return generatedNumber
  }
  alert('Ошибка! \nДиапазон чисел должен быть:\na,b<=0 и a<b ! ');
}

numbersRange();
// вторая функция по заданию
function floatPointRange(min, max, point) {
  if (min >= 0 && max >= 0 && min < max) {
    let generatedNumber = min + Math.random() * (max + 1 - min);
    generatedNumber = generatedNumber.toFixed(point);
    console.log('Результат: ' + generatedNumber + ' из диапазона' + ' от ' + min + ' до ' + max + 'с указанным "количеством знаков после запятой" ' + point);
    return generatedNumber;
  }
  alert('Ошибка! \nДиапазон чисел должен быть:\na,b<=0 и a<b ! ');
}

floatPointRange();
