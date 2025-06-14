import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

//отримаємо форму та інпут
const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  // інпут користувача
  //пробіли та регістр
  const request = input.value.toLocaleLowerCase().trim();

  //  одне зображення -  fgh  або   kkk
  if (!request) {
    // це працює на пробіл !!!
    //  якщо нічого не ввести -  прибрати required у html

    // console.log(input);

    iziToast.error({
      title: '❌ Error',
      message: 'Будь ласка, введіть запит!!!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(); //
  showLoader(); // показати завантаження

  try {
    const data = await getImagesByQuery(request);
    //якщо пустий масив
    if (data.hits.length === 0) {
      iziToast.error({
        title: '❌ Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
  } finally {
    hideLoader(); // приховати завантаження

    form.reset(); // очистити пр новому інпуті
  }
}
