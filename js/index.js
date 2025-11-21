import { Slider } from "./components/slider.js";
import { BurgerMenu } from "./components/burger-menu.js";

function init() {
  new BurgerMenu();
  new Slider('reviews');

}
document.addEventListener("DOMContentLoaded", init);