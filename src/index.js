import debounce from 'lodash.debounce';
import { fetchCountries } from './css/api/fetchCountries';
import { inputCountry, listCountries, countyInfo } from './refs';
import { getMarkupListCountries, getMarkupCountry } from './markup';
import { addMarkupCountry } from './addmarkup';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const debouncedHandle = debounce(enteredCountry, DEBOUNCE_DELAY);

inputCountry.addEventListener('input', debouncedHandle);

function enteredCountry(event) {
  fetchCountries(event.target.value.trim()).then(resolve => {
    if (resolve.length === 1) {
      let markup = getMarkupCountry(resolve);
      addMarkupCountry(markup, listCountries);
    } else if (resolve.length > 1) {
      let markup = getMarkupListCountries(resolve);
      addMarkupCountry(markup, listCountries);
    }
    console.log(event);
  });
}
