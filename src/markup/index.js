export function getMarkupListCountries(country) {
  return country
    .map(({ name, flags }) => {
      return `<li class="js-item-country"><img class="js-img-country;" src="${flags.svg}" alt="flag ${name.official}" width="25" height="25" style="
      align-items: baseline; 
      border-radius: 5px;
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 10px;
      ">
    <p>${name.official}</p>
    </li>`;
    })
    .join('');
}

export function getMarkupCountry(country) {
  return country
    .map(({ name, capital, population, flags, languages }) => {
      const arrLanguages = Object.values(languages).map(e => e);
      console.log(arrLanguages);
      return `<li><ul style="
      list-style: none;
      display: flex;
      width: 400px;
      flex-direction: column;
      padding: 20px;
      background-color: #d1cdc2;
      border-radius: 15px;
      "><li style="
      display: flex;
      flex-wrap: nowrap;
      "><img style="
      margin-bottom: 10px;
      margin-top: auto;
      margin-bottom: auto;
      padding: 10px;
      border-radius: 5px;
      " src="${flags.svg}" alt="flag ${name.official}" width="50" height="50"><p style="
      font-size: 25px;
      font-weight: bold;
      "
      >${name.official}</p></li>
<li style="
font-weight: bold; 
margin-bottom: 10px;
">Capital: <span style="
font-weight: lighter;
">${capital}</style=></li>
<li style="
font-weight: bold; 
margin-bottom: 10px;
">Population: <span style="
font-weight: lighter;
">${population}</span></li>
<li style="
font-weight: bold;
">Languages: <span style="
font-weight: lighter;
">${arrLanguages}</span></li></ul></li>`;
    })
    .join('');
}
