async function getData(params) {
  try {
    if (!params) {
      params = "";
    }
    const response = await fetch(
      `https://6906fed5b1879c890ed88432.mockapi.io/Cards?${params}`
      // Чтобы сделать пагинацию нужно написать .../?page=1&limit=10
    );
    const DATA = await response.json();

    return DATA;
  } catch (error) {
    console.error("Ошибка загрузки:", error);
    return [];
  }
}
export default getData;
