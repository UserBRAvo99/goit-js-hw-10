import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { listCountries } from '../../refs';

// Оголошую змінну з базовим URL для підставлення динамічного значення
const BASE_URL = 'https://restcountries.com/v3.1/name/';
// функція fetchCountries приймає ім'я країни і динамічно додає до базового URL
export function fetchCountries(name = 'peru') {
  return fetch(BASE_URL + name + '?field=name').then(resolve => {
    //   перевірка чи статус запиту ОК, в іншому випадку перекидає на помилку(з текстом що за помилка)
    // console.log(resolve);
    if (resolve.ok) {
      return resolve.json();
    }
    //   дія яка перекине на помилку
    throw new Error(
      resolve.statusText,
      (listCountries.innerHTML = ''),
      Notify.failure('Oops, there is no country with that name')
    );
  });
}
