import getData from "./get_data.js";
import { SetupCards } from "./components/setupCards.js";
import Loader from "./components/loader/loader.js";

export async function render(result) {
  const loader = new Loader();
  try {
    loader.showLoader();

    new SetupCards();

    

  } catch (error) {
    console.error("Ошибка: ", error);
  } finally {
    loader.hideLoader();
  }
}
