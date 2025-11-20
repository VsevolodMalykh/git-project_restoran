import CardInfo from "./CardsInfo/CardInfo.js";

function renderCards(data) {

  const container = document.getElementById("menu");
  container.innerHTML = "";
  data.forEach((cardData) => {
    const card = document.createElement("div");

    card.classList.add("menu__card");
    card.innerHTML =
      `<a class="menu__card">
                <div class="menu__cardImg">
                  <img
                    src="${cardData.imageUrl}"
                    alt="${cardData.title}"
                    loading="lazy"
                  />
                </div>
                <h6 class="menu__cardTitle ${
                  cardData.isRegularWeight ? "regular" : ""
                }">${cardData.title}</h6>
                <p class="menu__cardPrices">
                  <p class="menu__cardPrice">$` +
      `${cardData.price.toFixed(2)}</p>
                  <p class="menu__cardOldPrice">
                  ${cardData.oldPrice != 0 ? "$" + cardData.oldPrice.toFixed(2) : ""}
                  </p>
                </p>
              </a>`;
              card.addEventListener('click', (e) => {
                console.log(cardData)
                const cardInfo = new CardInfo(cardData);
                
              })
    container.append(card);
  });
}

export default renderCards;