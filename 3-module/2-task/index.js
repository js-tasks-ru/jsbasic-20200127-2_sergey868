/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(',');
  let arr2 = str.split(' ');
  let arr3 = arr.concat(arr2);
  let arr1 = [];
  for (let elem of arr3) {
    let number = +elem;
    if (number && typeof number === 'number') arr1.push(number);
  }
  arr1.sort((a, b)=>a - b);
  return {min: arr1[0], max: arr1[arr1.length - 1] };
}
