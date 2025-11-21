import { Slider } from "./components/slider.js";
import { render } from "./render.js";

class CurrentPage {
  constructor(){
    this.currentPage = 1
  }

  setCurrentPage(value){
    this.currentPage = value
  }
  getCurrentPage(){
    return this.currentPage
  }
}
 export const currentPage = new CurrentPage()

function init() {
  render(currentPage);
    new Slider('cardInfo');
}
document.addEventListener("DOMContentLoaded", init);  