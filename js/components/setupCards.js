import renderCards from "./renderCards.js";
import getData from "../get_data.js";

export class SetupCards {
  constructor() {
    this.sortValue = 'Newest';
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
      this.buildCards()
    })
  }

  filterBy
  
  async buildCards() {
    let params = []

    
    this.sortBy();

    console.log(this.sortValue);
    console.log('Билд кард вызвался')
    
    
    if(this.sortValue === "toUpperPrice"){
      params.push('sortBy=price&order=asc')
    }else if(this.sortValue === "toLowerPrice"){
      params.push('sortBy=price&order=desc')
    }


    // if(this.sortValue === "toUpperPrice"){
    //   result.sort((a, b) => a.price - b.price);
    // }else if(this.sortValue === "toLowerPrice"){
    //   result.sort((a, b) => b.price - a.price);
    // }
    // params.join('&')
    // console.log(params)
    console.log(params.join('&'))
    renderCards(await getData(params.join('&')));
  }
}
