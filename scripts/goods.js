console.clear();

const menu = [
    {
        id: 1,
        category: "Тануки",
        img: "./images/goods-1.png",
        title: "Пицца плюс",
        description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
        price: 250
    },
    {
        id: 2,
        category: "Тануки",
        img: "./images/goods-2.png",
        title: "Калифорния лосось стандарт",
        description: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
        price: 395
    },
    {
        id: 3,
        category: "Тануки",
        img: "./images/goods-3.png",
        title: "Окинава стандарт",
        description: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
        price: 250
    },
    {
        id: 4,
        category: "Тануки",
        img: "./images/goods-4.png",
        title: "Цезарь маки хl",
        description: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
        price: 250
    },
    {
        id: 5,
        category: "Тануки",
        img: "./images/goods-5.png",
        title: "Ясай маки стандарт 185 г",
        description: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
        price: 250
    },
    {
        id: 6,
        category: "Тануки",
        img: "./images/goods-6.png",
        title: "Ролл с креветкой стандарт",
        description: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
        price: 250
    },
]
const  renderGoods = () => {

    const container = document.querySelector("#goods-container");

    container.innerHTML = ""

    menu.forEach(({id, img, description, price, title}) => {
        container.insertAdjacentHTML("beforeend", `
             <!-- Product -->
                <div class="product goods">
                    <div class="product__imageholder">
                        <img src="${img}" alt="${title}">
                    </div>

                    <div class="product__content">
                        <div class="product__content_top">
                            <h4 class="title-3">
                                Пицца плюс
                            </h4>
                        </div>

                        <p class="product__desc">
                           ${description}
                        </p>

                        <div class="product__bottom">
                            <button class="button button-primary" data-id="${id}">
                                <span>В корзину</span>
                                <span>
                                    <img src="./images/shopping-white.svg" alt="error icon">
                                </span>
                            </button>

                            <p class="price">${price} &#8381;</p>
                        </div>
                    </div>
                </div>
            <!-- // Product -->
        `)
    })

}

renderGoods();

const goodsTop = () => {
    const top = document.querySelector("#goods-top");

    const title = top.querySelector(".title-2");

    const rating = top.querySelector(`#rating`);

    const price = top.querySelector("#price");

    const category = top.querySelector("#category");

    const params = window.location.search
    const urlSearchParams = new URLSearchParams(params)
    const id = urlSearchParams.get('category')


    console.log(id)

}

goodsTop()