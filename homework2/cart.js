
//класс для товара
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    //метод возвращает html-разметку отрисовка корзины
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="button1">Добавить в корзину</button></div>`;
    }
}

//класс для списка товаров GoodsList.
class GoodsList {
    constructor() {
        this.goods = [];
    }
    //метод для заполнения списка goods.
    fetchGoods() {
        this.goods = [
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
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}


// Класс элемента корзины
class BasketItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    render() {
    }
}
// Класс корзины
class Basket {
    constructor() {
        this.cartGoods = [];
    }
    // Добавление товара в корзину
    addToBasket(id) {
        let toBasket;
        list.goods.forEach(function (item) {
            if (id == item.id) {
                toBasket = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                }
            }
        });
        this.cartGoods.push(toBasket);
        this.basketCount();
    }
    // Удаление товара из корзины 
    deleteFromBasket(id) {
        let getIdElemen;
        this.cartGoods.forEach(function (item, i) {
            let thisId = item.id;
            if (id == thisId) {
                getIdElemen = i;
            }

        });
        this.cartGoods.splice(getIdElemen, 1);
        this.render();
        this.basketCount();
    }


    // Считаем стоимость товаров в корзине
    calcAllGoods() {
        let totalPrice = 0;
        this.cartGoods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
            }
        });
        let totalGoodsAnswer = "Общая сумма товаров в корзине: $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
    // Считаем количество товаров в корзине
    basketCount() {
        let count = this.cartGoods.length;
        document.getElementById('cartcoint').innerHTML = ' (' + count + ')';
    }

}
const list = new GoodsList();
list.fetchGoods();
list.render();