

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    for (let y = 0; y < table.rows[i].cells.length; y++) {

      if (table.rows[i].cells[3].dataset.available === 'true') {

        table.rows[i].classList.add('available');

      } else if (table.rows[i].cells[3].dataset.available === 'false') {

        table.rows[i].classList.add('unavailable');

      } else if (table.rows[i].cells[3].dataset.available === undefined) {

        table.rows[i].hidden = true;

      }
      if (table.rows[i].cells[2].textContent === 'm') {

        table.rows[i].classList.add('male');

      }
      if (table.rows[i].cells[2].textContent === 'f') {

        table.rows[i].classList.add('female');

      }
      if (table.rows[i].cells[1].textContent < 18) {

        table.rows[i].style = "text-decoration: line-through";

      }
    }
  }
}
