/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.thead = [];
    this.el.innerHTML = this.creatTable();
    this.el.className = 'pure-table';
    this.id = null;
    //this.el.onclick=this.onClick.bind(this);
    this.el.onclick = event=>this.onClick(event);

  }
  creatTable() {

    this.thead.push(`<thead><tr><td>Id</td><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td> </td></tr></thead>`);


    let data1 = this.data.map(element=>{

      return `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.age}</td><td>${element.salary}</td><td>${element.city}</td><td><a data-delete="id" href="#delete">X</a></td></tr>`;

    });
    data1.push('</tbody>');
    data1.unshift('<tbody>');

    return this.thead.concat(data1).join('');

  }
  onClick(event) {

    if (event.target.dataset.delete
    ) {

      let tr = event.target.closest('tr');
      this.id = +tr.cells[0].textContent;
      tr.remove();

    }
    this.onRemoved(this.id);
  }


  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
