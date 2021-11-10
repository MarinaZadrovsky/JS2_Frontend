onload = function () {
  class ProductsList {
    constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];
      this._fetchProducts();
    }

    _fetchProducts() {
      this.goods = [
        { id: 1, title: 'Grooming', price: 150 },
        { id: 2, title: 'Clothes', price: 1450 },
        { id: 3, title: 'Bowls and Drinker', price: 250 },
        { id: 4, title: 'Fillers', price: 150 },
        { id: 5, title: 'Food', price: 150 },
        { id: 6, title: 'Scratching', price: 350 },
        { id: 7, title: 'Beds and Houses ', price: 250 },
        { id: 8, title: 'Vitamins', price: 150 },
        { id: 9, title: 'Ammunition', price: 350 },
        { id: 10, title: 'Veterinary Pharmacy', price: 1250 },
        { id: 11, title: 'Bowls', price: 350 },
        { id: 12, title: 'Aviaries and Cages', price: 1250 },
      ];
    }
    render() {
      const block = document.querySelector(this.container);
      for (let product of this.goods) {
        const productObj = new ProductItem(product);
        this.allProducts.push(productObj);
        block.insertAdjacentHTML('beforeend', productObj.render())
      }
    }
    getSum() {
      let res = this.allProducts.reduce((s, item) => s + item.price, 0);
      alert(res);
    }
  }


  class ProductItem {
    constructor(product, img = 'img2/content.jpg') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;

    }

    render() {
      return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="img2">
              <h3 class = "title">${this.title}</h3>
              <p class = "price">${this.price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
    }
  }

  let list = new ProductsList();
  list.render();
  list.getSum();

  class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
  }

  class ElemBasket {
    render() { }

  }
}
