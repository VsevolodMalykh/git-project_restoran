
import { SetupCards } from "./components/setupCards.js";
import Loader from "./components/loader/loader.js";




export async function render() {
  const loader = new Loader();
  try {

    new SetupCards();



  } catch (error) {
    console.error("Ошибка: ", error);
  } finally {
    loader.hideLoader();
  }
}
