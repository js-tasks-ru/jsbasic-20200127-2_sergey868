/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (!n || isNaN(n) || n !== Number(n)) {
    alert("Пожайлуста, введите число");

  }
  if (n === 0 || n === 1) {

    return n = 1;

  }
  let start = 1;
  for (;n;n--) {
    start *= n;

  }
  return start;

}
