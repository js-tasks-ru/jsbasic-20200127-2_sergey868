'use strict';

class CheckoutProductList {
  //productsStoreKey = 'cart-products';
  constructor(parentElement) {
    this.arrFromStoreg = JSON.parse(localStorage.getItem('cart-products'));
    this.el = parentElement;
    this.el.innerHTML = this.creatList();
    this.el.onclick = this.onClick.bind(this);
    //this.arrFromStoreg = JSON.parse(localStorage.getItem('cart-products'));
  }
  onClick (event) {
    if (event.target.dataset.buttonRole === "checkout-remove-product") {
      let quession = confirm('Вы уверенны, что хотите удалить  этот товар из корзины?');
      if (quession) {
        let product = event.target.closest('.product-wrapper');
        let id = +product.dataset.productId;
        for (let i = 0; i < this.arrFromStoreg.length;i++) {
          if (this.arrFromStoreg[i].id === id) {
            this.arrFromStoreg.splice(i, 1);
            product.remove();
          }
        }
        //console.log(this.arrFromStoreg);
        let json = JSON.stringify(this.arrFromStoreg);
        localStorage.setItem('cart-products', json);
        //console.log(localStorage);
      }
    }
  }
  creatList () {
    let arrString = this.arrFromStoreg.map(element => {
      return `<div data-product-id=${element.id} class="product-wrapper box-inner-col description-col">
  <div class="product-image-container">
    <img class="product-image" src=${element.imageUrl} alt="img">
  </div>
  <div class="product-description">
    <h4 class="col-title mb-2">${element.title}</h4>
    <div class="rate">
      ${(() => {
    let iIconStar = '        <i class="icon-star"></i>\n';
    let iIconStarCheked = '         <i class="icon-star checked"></i>\n';
    let iIconStarActive = '         <i class="icon-star active"></i>\n';
    let starsNoActive = '';
    let starsCheckedActive = '';
    if (element.rating === null) {
      for (let i = 0; i < 5; i++) {
        starsNoActive += iIconStar;
      }
      return starsNoActive;
    }
    if (element.rating) {
      let stars = element.rating.stars;
      for (let i = 0; i < 5; i++) {
        if (stars === 0) {
          starsCheckedActive += iIconStarActive;
        } else {
          stars--;
          starsCheckedActive += iIconStarCheked;
        }
      }
      return starsCheckedActive;
    }
  })()}
    </div>
    <p class="rate-amount d-none d-md-block mt-1">11 reviews</p>
  </div>

  <div class="product-price">
    <p class="mb-0 font-weight-light">Price:</p>
    <h4 class="col-title price-text mb-2">${element.price}</h4>
  </div>

  <div class="product-remove-button-wrapper">
    <button type="button"
            data-button-role="checkout-remove-product"
            class="product-remove-button">
      X
    </button>
  </div>

</div>`;
    });

    let inArrString = arrString.join('');

    let FinalString = `<div class="product-list-box">
    <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
          ${inArrString}
</div>`;
    return FinalString;
  }
}
console.log(!!JSON.parse(localStorage.getItem('cart-products')));
if (
  JSON.parse(localStorage.getItem('cart-products'))) {

  new CheckoutProductList(document.querySelector('.product-list-box-wrapper'));
}
window.CheckoutProductList = CheckoutProductList;
