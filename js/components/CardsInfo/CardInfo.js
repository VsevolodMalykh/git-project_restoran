import Loader from "../loader/loader.js";

export default class CardInfo {
  constructor(card) {
    this.card = card;
    this.returnCode = document.querySelector(".findProduct").innerHTML;

    // this.originalUrl = window.location.href;
    this.init();
  }

  init() {
    this.displayCard();
  }

  async displayCard() {
    const loader = new Loader();
    const searchParams = new URLSearchParams();
    searchParams.append("id", this.cardId);

    try {
      const res = await fetch(
        `https://6906fed5b1879c890ed88432.mockapi.io/cardsInfo?id=${this.cardId}`
      );
      const data = await res.json();

      const container = document.createElement("div");
      container.classList.add("container");
      container.classList.add("cardInfo");

      container.innerHTML = await `
      <button class="returnButton"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ff9f0d" alt="return button"> <p>RETURN</p></button>
        <div class="container cardInfo__container">
          <div class="cardInfo__img"></div>
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

      // Тут я начал делать чтобы было по другой ссылке новая страница, но нашел только как сделать это с помощью плагина, а это запрещено
      document.querySelector(".findProduct").innerHTML = "";
      document.querySelector(".findProduct").append(container);
      loader.hideLoader();
    } catch {
      console.error(error);
    } finally {
      loader.hideLoader();
    }
  }
}
