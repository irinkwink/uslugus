import './index.html';
import './index.scss';
import { choicesController } from './modules/choicesController';
import { modalController } from './modules/modalController';
import { selectController } from './modules/selectController';
import { showPassword } from './modules/showPassword';


const init = () => {

  modalController({
    modal: '.modal_sign-in',
    btnOpen: '.header__auth-btn_sign-in',
    btnClose: '.modal__close',
  });


  modalController({
    modal: '.modal_sign-up',
    btnOpen: '.header__auth-btn_sign-up',
    btnClose: '.modal__close',
  });

  modalController({
    modal: '.modal_person',
    btnOpen: '.service',
    parentBtns: '.services__list',
    btnClose: '.modal__close',
    handlerOpenModal: async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());

      console.log('data: ', data);

      const comments = document.querySelectorAll('.review__text');

      comments.forEach(comment => {
        if (comment.scrollHeight > 38) {
          const button = document.createElement('button')
          button.classList = 'review__open review__open_text';
          button.textContent = 'Развернуть';
          comment.after(button);

          button.addEventListener('click', () => {
            comment.classList.toggle('review__text_open');
            button.textContent = comment.classList.contains('review__text_open')
              ? 'Свернуть'
              : 'Развернуть'
          })
        }
      })
    }
  });

  // modalPerson.onOpenModal(() => {
  //   console.log('Hi, friends');
  // })

  selectController({
    openBtn: '.category__title',
    openBlock: '.category__list',
    closeBtn: '.category__btn',
    handlerChange: (value) => {
      console.log(value);
    },
  });

  showPassword();
  choicesController();

}

init();

document.addEventListener('mousedown', ({target}) => console.log(target))
