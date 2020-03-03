'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;
    this.listGroupItem = this.el.querySelectorAll('.list-group-item');
    this.onPointerenter();
    this.onPointerleave();

  }
  onPointerenter() {
    for (let i = 0; i < this.listGroupItem.length; i++) {
      this.listGroupItem[i].addEventListener('pointerenter', ()=>{
        for (let y = 0; y < this.listGroupItem[i].children.length; y++) {
          if (this.listGroupItem[i].children[y].className === 'dropdown-menu') {

            this.listGroupItem[i].children[y].classList.add('show');
          }
        }
        document.querySelector('.backdrop').classList.add('show');
      });
    }
  }
  onPointerleave() {
    for (let i = 0; i < this.listGroupItem.length; i++) {
      this.listGroupItem[i].addEventListener('pointerleave', ()=>{
        for (let y = 0; y < this.listGroupItem[i].children.length; y++) {
          if (this.listGroupItem[i].children[y].classList.contains('show')) {

            this.listGroupItem[i].children[y].classList.remove('show');
          }
        }
        document.querySelector('.backdrop').classList.remove('show');
      });
    }
  }

}
let menu = new Menu(document.createElement('div'));
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
