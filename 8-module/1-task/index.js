class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.show().then((result) => {
      this.el.innerHTML = result;
      this.el.onclick = this.onClick.bind(this);
      this.arrFromStoreg = JSON.parse(localStorage.getItem('cart-products'));
      this.value = this.arrInit() ;
      //this.arrFromServer = arr1;
    });
    this.arrFromServer = null;
    //this.el.onclick = event=> this.onClick(event) ;
  }
  arrInit() {
    if (this.arrFromStoreg) {
      //localStorage.clear();
      return this.arrFromStoreg;
    } else {
      return [];
    }
  }
  onClick (event) {
    //console.log(this.arrFromStoreg);
    //console.log(this.arrFromServer);
    if (event.target.dataset.buttonRole) {
      let quession = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');
      if (quession) {
        let card = event.target.closest('.products-list-product');
        //console.log(card);
        let id = +card.dataset.productId;
        for (let element of this.value) {
          if (element.id === id) {
            console.log("Товар добавлен в корзину");
            return;
          }
        }
        for (let element of this.arrFromServer) {
          if (element.id === id) {
            this.value.push(element);
          }
        }
        //this.value.push(id) ;
        // console.log(this.value);
        let json = JSON.stringify(this.value);
        //localStorage.clear();
        localStorage.setItem('cart-products', json);
        console.log(localStorage);
        //console.log(this.arrFromStoreg);
      }
    }
  }
  show() {
    return fetch('../assets/data/products.json')
      .then(response => response.json())
      //.then(arr=>console.log( arr[0].rating));
      .then(arr => new Promise((resolve) => {
        //console.log(arr);
        this.arrFromServer = arr;
        let arrString = arr.map(element => {
          return `<div data-product-id=${element.id} class="products-list-product col-md-6 col-lg-4 mb-4">
       <div class="card">
       <div class="card-img-wrap">
       <img class="card-img-top" src=${element.imageUrl} alt="Card image cap">
       </div>
       <div class="card-body">
       <h5 class="card-title">${element.title}</h5>
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
    <span class="rate-amount ml-2">24</span>

       </div>
       ${(() => {

    if (element.oldPrice) {

      return `<p class="card-text price-text discount">
         <strong>${element.oldPrice}</strong>
       <small class="ml-2">${element.price}</small>
       </p>`;

    } else {

      return `<p class="card-text price-text">
         <strong>${element.price}</strong>
       </p>`;

    }

  })()}

     <button class="product-add-to-cart" data-button-role="add-to-cart">
       Add to cart
     </button>
     </div>
     </div>
     </div>`;

        });
        // console.log(arrString);
        let inArrString = arrString.join('');
        //console.log(inArrString);
        let FinalString = `<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
           ${inArrString}
        </div>
    </div>
</div>`;
        //console.log(FinalString);

        resolve(FinalString);


      }));
  }

}


const productList = new ProductList(document.querySelector('.product-list'));
productList.show();
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;

