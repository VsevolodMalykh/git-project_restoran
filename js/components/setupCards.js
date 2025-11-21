import renderCards from "./renderCards.js";
import getData from "../get_data.js";
import { initPagination, getFinalCurrentPage } from "./pagination.js";

export class SetupCards {
  constructor() {
    this.sortValue = "Newest";
    this.FilterByVegeterian = false;
    this.categoriesValue = [];
    this.searchValue = "";

    this.init();
  }

  init() {
    // initPagination((currentPage) => {
    //   console.log(`Страница изменилась на: ${currentPage}`);
    this.buildCards();
    // });

    this.sortBy();
    this.filterByVegeterian();
    this.filterByCategories();
    this.filterBySearch();
    filterByCategories();
  }

  sortBy() {
    const sortBy = document.getElementById("sortBy");
    if (!sortBy) return;

    sortBy.addEventListener("change", (e) => {
      this.sortValue = e.target.value;
      this.bySortUseCounter++;
      this.buildCards();
    });
  }

  filterByVegeterian() {
    const filterByVegeterian = document.getElementById("filterByVegeterian");
    if (!filterByVegeterian) return;

    filterByVegeterian.addEventListener("change", (e) => {
      if (e.target.value === "Vegeterian") {
        this.FilterByVegeterian = true;
      } else {
        this.FilterByVegeterian = false;
      }
      this.byVegeterianUseCounter++;
      this.buildCards();
    });
  }

  filterByCategories() {
    const sandwiches = document.getElementById('category__Sandwiches');
    const burger = document.getElementById('category__Burger');
    const chickenChup = document.getElementById('category__ChickenChup');
    const drinks = document.getElementById('category__Drink');
    const pizza = document.getElementById('category__Pizza');
    const nonVeg = document.getElementById('category__NonVeg');
    const uncategorized = document.getElementById('category__Uncategorized');

    sandwiches.addEventListener("change",() => {
      if(!categoriesValue.includes('sandwiches')){

        this.categoriesValue.push('sandwiches');
        console.log(this.categoriesValue)
      }
    })
    burger.addEventListener("change",() => {
      if(!categoriesValue.includes('sandwiches')){

        this.categoriesValue.push('sandwiches');
        console.log(this.categoriesValue)
      }
    })
    drinks.addEventListener("change",() => {
      // if(){}
      this.categoriesValue.push('drinks');
    })
    chickenChup.addEventListener("change",() => {
      // if(){}
      this.categoriesValue.push('chickenChup');
    })


    this.categoriesValue.join("|");
    console.log(this.categoriesValue);
    this.buildCards()
  }

  filterBySearch() {
    const searchInput = document.getElementById("search__input");
    searchInput.addEventListener("input", (e) => {
      this.searchValue = e.target.value;
      this.buildCards();
    });
  }

  async buildCards() {
    let params = [];

    if (this.sortValue === "toUpperPrice") {
      params.push("sortBy=price&order=asc");
    } else if (this.sortValue === "toLowerPrice") {
      params.push("sortBy=price&order=desc");
    }

    if (this.FilterByVegeterian) {
      params.push("vegan=true");
    }
    if (this.searchValue) {
      params.push(`title=${this.searchValue.trim().toLowerCase()}`);
    }

    if(this.categoriesValue) {
      params.push(`categories=${this.categoriesValue}`)
    }

    params.push(`page=${getFinalCurrentPage()}`);
    params.push("limit=15");

    console.log("Загружаем данные для страницы:", getFinalCurrentPage());
    renderCards(await getData(params.join("&")));
  }
}
