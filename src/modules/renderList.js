import { API_URL } from "./const"
import { createCard } from "./createCard";
import { getData } from "./getData";

export const renderList = async (url = `${API_URL}/api/service`) => {
  const servicesList = document.querySelector('.services__list');
  servicesList.textContent = '';

  const data = await getData(url);

  const cards = data.map(createCard);

  servicesList.append(...cards)
}
