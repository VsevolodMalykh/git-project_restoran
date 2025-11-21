import Loader from "../loader/loader.js";

export default class CardInfo {
  constructor(card) {
    this.card = card;
    this.returnCode = document.querySelector(".findProduct").innerHTML;

    document.addEventListener("DOMContentLoaded", (event) => {
      console.log("DOM полностью загружен и разобран");
    });
    // this.originalUrl = window.location.href;
    this.init();
  }

  init() {
    this.displayCard();
  }

  async displayCard() {
    new Loader();
    const searchParams = new URLSearchParams(window.location.pathname);
    // searchParams.append("id", this.card.id);
    try {
      // const res = await fetch(
      //   `https://6906fed5b1879c890ed88432.mockapi.io/cardsInfo?id=${this.card.id}`
      // );
      const data = await res.json();
      console.log(await data);

      const container = document.createElement("div");
      container.classList.add("container");
      container.classList.add("cardInfo");

      console.log(this.card.imageUrl);
      container.innerHTML = `<button class="returnButton">
            <img
              src="https://img.icons8.com/?size=100&id=26194&format=png&color=ff9f0d"
              alt="return button"
            />
            <p>RETURN</p>
          </button>
          <div class="container cardInfo__container">
            <div class="cardInfo__slider">
              <div class="cardInfo__slides">
                <div class="cardInfo__slide">
                  <img
                    src="${data.imageUrl}"
                    alt="product title"
                  />
                </div>
                <div class="cardInfo__slide">
                  <img src="./img/shop/cards/zaglushka.webp" alt="zaglushka" />
                </div>
                <div class="cardInfo__slide">
                  <img src="./img/shop/cards/zaglushka.webp" alt="zaglushka" />
                </div>
              </div>
            </div>
            <div class="cardInfo__dots">
              <button class="cardInfo__dot active" data-slide="0"></button>
              <button class="cardInfo__dot" data-slide="1"></button>
              <button class="cardInfo__dot" data-slide="2"></button>
            </div>
            <div class="cardInfo__textContent">
              <div class="cardInfo__heading">
                <p class="cursive cardInfo__cursive">Our product</p>
                <h4 class="cardInfo__title">Fresh Lime</h4>
                <p class="cardInfo__isVegan">No Vegan</p>
              </div>
              <p class="cardInfo__calories">Calories: <span>0</span></p>
              <div class="cardInfo__prices">
                <p class="cardInfo__price">$38</p>
                <p class="cardInfo__OldPrice">$45</p>
              </div>
              <p class="cardInfo__text text">
                Освежающий натуральный лаймовый напиток с легкой кислинкой и
                мятными нотками. Идеален для жаркого дня. Содержит натуральный
                витамин C, который укрепляет иммунитет и улучшает пищеварение
              </p>
              <ul class="cardInfo__categories">
                <li class="cardInfo__category">drinks</li>
                <li class="cardInfo__category">meat</li>
              </ul>
            </div>
            <button class="cardInfo__btnBuy btn-ripple">
              <span>Buy it right now!</span>
            </button>
          </div>`;

      document.querySelector(".returnButton").addEventListener("click", () => {
        searchParams.remove().append(window.location.pathname);
        console.log("sdfghj");
      });
      document.querySelector(".findProduct").innerHTML = "";
      document.querySelector(".findProduct").append(container);
      loader.hideLoader();
    } catch {
      console.error(error);
    } finally {
      Loader.hideLoader();
    }
  }
}
