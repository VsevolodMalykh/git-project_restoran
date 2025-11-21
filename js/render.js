
import { SetupCards } from "./components/setupCards.js";
import Loader from "./components/loader/loader.js";


let setupInstanse = null;

export async function render() {
  try {

    if(!setupInstanse){
    setupInstanse = new SetupCards();
    }


  } catch (error) {
    console.error("Ошибка: ", error);
  }
}
