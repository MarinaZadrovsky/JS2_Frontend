const APUI = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';
(function () {


    class GoodsItem {
        constructor(title = 'default title', price = 0) {
            this.title = title;
            this.price = price;
        }

        render() {
            return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="button1">Добавить в корзину</button></div>`;
        }
    }

    class GoodsList {
        goods = [];
        constructor() {
            this.fetchGoods();
            this.render();
        }

        fetchGoods() {
            new Promise((resolve) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", `${API}${GOODS}`, true)
                xhr.send();
                xhr.onload = () => {
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        }

        render() {
            const GoodsList = this.goods.map(({ title, price }) => {
                const GoodsItem = new GoodsItem(title, price);
                return GoodsItem.render();
            })
            document.querySelector('.goods-list').innerHTML = GoodsList.join('');
        }
    }



    window.onload = () => {
        const goodlist = new GoodList();
        goodList.fetchGoods();
        goodlist.render();
    }
})()
