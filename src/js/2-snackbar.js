// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
// console.log(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //
  const delay = Number(form.elements.delay.value); // отримуємо число користувача
  const state = form.elements.state.value; // обираємо  кнопку

  //   console.log(delay);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log('Значення - Fulfilled:', delay);
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log('Значення - Rejected:', delay);
    });
}
