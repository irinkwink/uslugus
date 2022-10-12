import { API_URL, directions } from "./const";
import { createStars } from "./createStars";
import { formatCurrency } from "./formatCurrency";
import { store } from "./store";

export const createCard = (data) => {
  const {avatar, category, comments, direction, id, price, name, surname} = data;

  const serviceItem = document.createElement('li');
  serviceItem.classList = 'services__item';

  const service = document.createElement('article');
  service.classList = 'service';
  service.dataset.id = id;
  serviceItem.append(service);

  const serviceAvatar = new Image(50, 50);
  serviceAvatar.classList = 'service__avatar';
  serviceAvatar.src = `${API_URL}/${avatar}`;
  serviceAvatar.alt = `${category} ${surname} ${name}`;

  const servicePresent = document.createElement('div');
  servicePresent.classList = 'service__present';

  const serviceTitle = document.createElement('h3');
  serviceTitle.classList = 'service__title';
  serviceTitle.textContent = store.category.find(item => item.title === category).rus;

  const serviceName = document.createElement('p');
  serviceName.classList = 'service__name';
  serviceName.textContent = `${name} ${surname[0].toUpperCase()}.`;

  servicePresent.append(serviceTitle, serviceName);
  
  const servicePrice = document.createElement('p');
  servicePrice.classList = 'service__price';
  servicePrice.textContent = `${directions[direction]} ${formatCurrency(price)}`

  const serviceReview = document.createElement('div');
  serviceReview.classList = 'service__review';

  const serviceCountReview = document.createElement('p');
  serviceCountReview.classList = 'service__count-review';
  serviceCountReview.textContent = comments.length.toString();

  serviceReview.append(createStars(comments), serviceCountReview)

  service.append(serviceAvatar, servicePresent, servicePrice, serviceReview);


  return serviceItem
}

