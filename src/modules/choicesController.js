import Choices from 'choices.js';

export const choicesController = () => {

  const formSelectCategory = document.querySelector('.form__select_category');
  const formSelectPrice = document.querySelector('.form__select_price');

  const option = {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  }

  new Choices('.form__select_category', {
    ...option,
    classNames: {
      containerOuter: 'choices form__select_category',
    }
  })
  new Choices('.form__select_price', {
    ...option,
    classNames: {
      containerOuter: 'choices form__select_price',
    }
  })

  // formSelectCategory.addEventListener('mouseup', (e) => {
  //   console.log('click');
  //   const choice = e.target.closest('.choices');
  //   if (choice) {
  //     choice.classList.toggle('check-open');
  //     if (choice.classList.contains('check-open')) {
  //       choice.classList.add('is-open');
  //     } else {
  //       choice.classList.remove('is-open');
  //     }
  //     console.log(choice);
  //   }
  // })

  

}