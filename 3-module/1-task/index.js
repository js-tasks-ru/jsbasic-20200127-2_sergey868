

/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {

  console.log(data);
  let str = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].age <= age) {
      str += `${data[i].name}, ${data[i].balance}\n`;
    }

  }
  str = str.slice(0, str.length - 1);

  return str;
}

