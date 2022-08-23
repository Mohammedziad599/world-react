import {createContext, useEffect, useState} from "react";
import {readFavouriteCountriesLocalstorage, setFavouriteCountriesLocalstorage} from "../../utilities/localstorage";

const FavouriteContext = createContext();

export function FavouriteProvider({children}) {

  const [favourite, setFavourite] = useState({});

  function addToFavourite(country) {
    setFavourite((prevState) => {
      prevState[country.cca3] = {
        name: country.name.common,
        flag: country.flag
      };
      setFavouriteCountriesLocalstorage(prevState);
      return prevState;
    });
  }

  function removeFromFavourite(code) {
    setFavourite((prevState) => {
      delete prevState[code];
      setFavouriteCountriesLocalstorage(prevState);
      return prevState;
    });
  }

  useEffect(() => {
    setFavourite(readFavouriteCountriesLocalstorage());
  }, []);

  return (
    <FavouriteContext.Provider value={[favourite, addToFavourite, removeFromFavourite]}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
