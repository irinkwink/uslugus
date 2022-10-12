import { API_URL } from "./const";
import { renderList } from "./renderList";

export const searchControl = () => {
  const searchForm = document.querySelector('.search');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('e: ', e);
    console.log('searchForm.search.value: ', searchForm.search.value);

    renderList(`${API_URL}/api/service?search=${searchForm.search.value}`)
  })
}