console.clear();

const restaurants = [
    {
        id: 1,
        cover: "./images/product-1.jpeg",
        title: `Пицца плюс`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 2,
        cover: "./images/product-2.png",
        title: `Тануки`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 3,
        cover: "./images/product-3.png",
        title: `FoodBand`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 4,
        cover: "./images/product-4.png",
        title: `Точка еды`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 5,
        cover: "./images/product-5.png",
        title: `Жадина-пицца`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 6,
        cover: "./images/product-6.png",
        title: `PizzaBurger`,
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    }
];

const renderRestaurants = () => {

    const container = document.querySelector(`#restaurants-container`);

    container.innerHTML = ""

    restaurants.forEach(({ time, title, category, cover, price, rating}) =>{
        container?.insertAdjacentHTML("beforeend", `
             <!-- Product -->
                <div class="product">
                    <a href="./goods.html?category=${title}">
                        <div class="product__imageholder">
                            <img src="${cover}" alt="${title}">
                        </div>
    
                        <div class="product__content">
                            <div class="product__content_top">
                                <h4 class="title-3">
                                    ${title}
                                </h4>
    
                                <span class="product__badge">
                                    ${time} мин
                                </span>
                            </div>
    
                            <div class="product__content_bottom">
                                <p class="star">
                                    <span>
                                        <img src="./images/star.svg" alt="error icon">
                                    </span>
                                    <span>
                                        ${rating}
                                    </span>
                                </p>
                                <p class="product__content__extra">
                                    <span>
                                        От ${price} &#8381;
                                    </span>
                                    <span>
                                        &#x2022;
                                    </span>
                                    <span>
                                        ${category}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            <!-- // Product -->
        `)
    })

}

renderRestaurants();