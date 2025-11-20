import renderCards from "./renderCards.js";
import getData from "../get_data.js";

export class SetupCards {
  constructor(data) {
    this.data = data;
    this.sortValue = 'Newest'
    this.init();
  }

  init() {
    this.buildCards();
  }
  sortBy() {
    const sortBy = document.getElementById('sortBy');
    if(!sortBy) return;
    
    sortBy.addEventListener('change' ,(e) => {
      this.sortValue = e.target.value
    })
  }

  filterBy
  
  buildCards() {
    let result = [...this.data]
    
    if(this.sortValue === "toUpperPrice"){
      result.sort((a, b) => a.price - b.price);
    }else if(this.sortValue === "toLowerPrice"){
      result.sort((a, b) => b.price - a.price);
    }
    
    renderCards(result);
  }
}
