import './CountriesList.css';
import CountryCard from "../country-card/CountryCard";
import {Box} from "@mui/material";


//TODO decide if this container is a smart component or a dump component
function CountriesList(props) {
  const {
    countries = []
  } = props;

  const countriesCards = countries.map((country) => {
    return (
      <Box key={country.code}>
        <CountryCard
          country={country}
        />
      </Box>
    );
  });

  return (
    <>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr));",
            md: "repeat(2, minmax(0, 1fr));",
            xl: "repeat(3, minmax(0, 1fr));"
          },
          columnGap: "2rem",
          rowGap: "2rem",
        }}
      >
        {countriesCards}
      </Box>
    </>
  );
}

export default CountriesList;
