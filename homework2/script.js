onload = function () {
  const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Blouse', price: 150 },
    { title: 'Jumper', price: 150 },
    { title: 'Jeanst', price: 350 },
    { title: 'Suit', price: 250 },
    { title: 'Cardigan', price: 150 },
    { title: 'Sweater', price: 350 },
    { title: 'T-shirt', price: 350 },
    { title: 'Coat', price: 1250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3 class="title">${title}</h3><p>${price}</p><button class="button1">Добавить в корзину</button></div>`;
  };
  
  const renderGoodsList = (list) => { 
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);
}