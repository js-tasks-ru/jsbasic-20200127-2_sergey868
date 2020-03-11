/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for(let key of Object.keys(obj)) {
    return false;
  }
  return true;

}
