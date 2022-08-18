import {filterCodes} from "./Constants";

export function setFavouriteCountriesLocalstorage(countries){
  localStorage.setItem(filterCodes.FAVOURITES, JSON.stringify(countries));
}

export function readFavouriteCountriesLocalstorage(){
  return JSON.parse(localStorage.getItem(filterCodes.FAVOURITES)) || {};
}