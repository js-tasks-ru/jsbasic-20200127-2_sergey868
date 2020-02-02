/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let str1 = str.toLowerCase();
  return (str1.includes('1xbet') || str1.includes('xxx')) || false ;

}
