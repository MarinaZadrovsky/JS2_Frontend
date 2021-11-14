onload = function () {
  const products = [
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
  ];

  const renderProduct = (product, img = 'img2/content.jpg') => {
    return `<div class="product-item">
              <img src="${img}">
              <h3 class = "title">${product.title}</h3>
              <p class = "price">${product.price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
  };
  const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
  };

  renderPage(products);
}
