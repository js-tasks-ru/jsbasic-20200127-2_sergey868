'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.el.innerHTML = `<div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner">
        <!--Вот здесь будет активный слайд-->
    </div>

    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>`;

    this.el.querySelector('.carousel-inner').innerHTML = `<div class="carousel-item active">
    <img src="assets/images/default-slide-img.jpg" alt="Activelide">
    <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">BEST LAPTOP DEALS</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>
</div>`;

    this.el.onclick = this.onClick.bind(this);
    this.slide = this.el.querySelector('.carousel-inner').getElementsByClassName('h1');
    this.count = 0;
    this.slideIndicators = this.el.querySelector('.carousel-indicators');
    this.slideIndicators.onclick = this.onClickIndicators.bind(this);
    this.saveTarget = null;
    this.slideTo = 0;
    this.slideActive = null;
    this.creatactive();

  }
  creatactive() {
    let activeslide = this.slides[this.count].id;
    for (let i = 0; i < this.slideIndicators.children.length; i++) {
      this.slideTo = this.slideIndicators.children[i].dataset.slideTo;
      this.slideTo = Number(this.slideTo);
      if (this.slideTo === activeslide) {

        this.slideActive = this.slideIndicators.children[this.slideTo];
        this.slideActive.classList.add('active');

       // console.log(this.slideActive);
        break;
      }

    }

  }
  deleteActive() {
    this.slideActive.classList.remove('active');
    //console.log(this.slideActive);
  }

  onClick(event) {

    if (event.target.className === "carousel-control-next" && this.count <= this.slides.length - 1) {

      this.count++;

      if (this.count === this.slides.length) {this.count = 0;}
      //console.log(this.count);
      this.slide[0].innerHTML = this.slides[this.count].title;
      this.deleteActive();
      this.creatactive();

    }
    if (event.target.className === 'carousel-control-prev') {
      this.count--;
      if (this.count < 0) {this.count = this.slides.length - 1;}
      //console.log(this.count);
      this.slide[0].innerHTML = this.slides[this.count].title;
      this.deleteActive();
      this.creatactive();

    }

  }
  onClickIndicators (event) {
   // if (this.saveTarget) { this.saveTarget.classList.remove('active');}
    for (let i = 0; i < this.slideIndicators.children.length; i++) {

      if (this.slideIndicators.children[i].classList.contains('active')) {

        this.slideIndicators.children[i].classList.remove('active');
      }

    }

    this.saveTarget = event.target;

    this.saveTarget.classList.add('active');

    this.slide[0].innerHTML = this.slides[this.saveTarget.dataset.slideTo].title;

  }


}


let carousel = new Carousel(document.createElement('div'));
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
