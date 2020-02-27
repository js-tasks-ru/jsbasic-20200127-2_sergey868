
function SortableTable(items) {

  this.el = document.createElement('table');
  this.thead = [];
  this.thead.push(`<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>`);
  this.createTbody = (items2)=> {
   items2 = items.map(element=>{

  return `<tr><td>${element.name}</td><td>${element.age}</td><td>${element.salary}</td><td>${element.city}</td></tr>`;

    });
    items2.unshift("<tbody>");
    items2.push("</tbody");

    return items2;
  };
  this.createTable = ()=>{
    this.table = this.thead.concat(this.createTbody(items)).join('');
    this.el.innerHTML = this.table;

  };

  this.createTable();

  this.sort = (column, desc = false) => {
    if (column === 2 && desc === true) {
      items.sort((element1, element2) => element2.salary - element1.salary);
      this.createTable();

    }
    if (column === 2 && desc === false) {
      items.sort((element1, element2) => element1.salary - element2.salary);
      //items.reverse();
      this.createTable();

    }
    if (column === 0 && desc === false) {
      items.sort((a, b)=>{
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        if (a.name === b.name) return 0;

      });
      this.createTable();
    }
    if (column === 0 && desc === true) {
      items.sort((a, b)=>{
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        if (a.name === b.name) return 0;

      });
      //items.reverse();
      this.createTable();
    }

  };

}
