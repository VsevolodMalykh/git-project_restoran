import { Slider } from "./components/slider.js";
import { BurgerMenu } from "./components/burger-menu.js";

function init() {
  new BurgerMenu();
  new Slider();

}
document.addEventListener("DOMContentLoaded", init);