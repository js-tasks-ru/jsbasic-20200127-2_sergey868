/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let element of Object.values(salaries)) {
    if (typeof element === "number") {
      sum += element;
    }
  }
  return sum;
}
