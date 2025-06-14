// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком), здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.
import axios from 'axios';

const API_KEY = '50822594-66f906f8174863719ea2394f1';
const BASE_URL = 'https://pixabay.com/api/';

//  змінна параметрів
// const params = new URLSearchParams({
//   key: API_KEY,
//   q: query,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// });

//  дефолтна адреса
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common["Authorization"] = "-";

// query - те що вводить користувач

export async function getImagesByQuery(query) {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  // повертаємо тільки те, що потрібно — об'єкт із даними
  return response.data;
}
