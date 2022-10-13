import { API_URL } from "./const"
import { createCard } from "./createCard";
import { getData } from "./getData";

export const renderList = async (url = `${API_URL}/api/service`, category = '') => {
  const servicesList = document.querySelector('.services__list');
  servicesList.textContent = '';

  const data = await getData(url);
  console.log('data: ', data);

  const renderData = category ? data.filter(item => item.category === category) : data

  const cards = renderData.map(createCard);

  servicesList.append(...cards)
}