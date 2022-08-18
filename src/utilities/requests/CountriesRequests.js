import axios from "axios";

export function getAllCountries() {
  return axios.get(`https://restcountries.com/v3.1/all?fields=name,cca3,region,population,capital,flags,flag`)
    .then(response => response.data);
}

export function searchCountriesByName(search) {
  return axios.get(`https://restcountries.com/v3.1/name/${search}?fields=name,cca3,region,population,capital,flags,flag`)
    .then(response => response.data);
}

export function getCountryDetailsFromCode(code) {
  return axios.get(`https://restcountries.com/v3.1/alpha/${code}?fields=flags,flag,name,population,region,subregion,capital,tld,currencies,languages,borders`)
    .then(response => response.data);
}

export function getCountryName(code) {
  return axios.get(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)
    .then(response => response.data);
}