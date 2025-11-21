import renderCards from "./renderCards.js";
import getData from "../get_data.js";
import { initPagination, getCurrentPage } from "./pagination.js";

export class SetupCards {
  constructor() {
    this.sortValue = "Newest";
    this.FilterByVegeterian = false;
    this.categoriesValue = [];

    this.bySortUseCounter = 0;
    this.byVegeterianUseCounter = 0;
    this.categoriesValueCounter = 0;

    this.init();
  }

  init() {
    initPagination((currentPage) => {
      console.log(`Страница изменилась на: ${currentPage}`);
      this.buildCards(); 
    });
    
  }
  
  sortBy() {
    const sortBy = document.getElementById("sortBy");
    if (!sortBy) return;

    !this.bySortUseCounter && sortBy.addEventListener("change", (e) => {
      this.sortValue = e.target.value;
      this.bySortUseCounter++;
      this.buildCards();
    });
  }

  filterByVegeterian() {
    const filterByVegeterian = document.getElementById("filterByVegeterian");
    if (!filterByVegeterian) return;

    !this.byVegeterianUseCounter && filterByVegeterian.addEventListener("change", (e) => {
      if (e.target.value === "Vegeterian") {
        this.FilterByVegeterian = true;
      } else {
        this.FilterByVegeterian = false;
      }
      this.byVegeterianUseCounter++;
      this.buildCards();
    });
  }

  filterByCategories(){

  }

   async buildCards() {
    let params = [];

    this.sortBy();
    this.filterByVegeterian();
    this.filterByCategories();

    if (this.sortValue === "toUpperPrice") {
      params.push("sortBy=price&order=asc");
    } else if (this.sortValue === "toLowerPrice") {
      params.push("sortBy=price&order=desc");
    }

    if (this.FilterByVegeterian) {
      params.push("vegan=true");
    }

    params.push(`page=${getCurrentPage()}`);
    params.push("limit=6");

    console.log("Загружаем данные для страницы:", getCurrentPage());
    renderCards(await getData(params.join("&")));
  }
}
