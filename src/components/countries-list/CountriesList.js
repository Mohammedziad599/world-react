import "./CountriesList.css";
import CountryCard from "../country-card/CountryCard";
import {Box} from "@mui/material";

function CountriesList({countries = [], loading = false, sx = {}}) {
  let countriesCards;

  if (loading) {
    countriesCards = new Array(9).fill(0).map((value, index) => {
      return (
        <Box
          key={index}
          sx={{
            mb: 4
          }}
        >
          <CountryCard
            country={{}}
            loading={loading}
          />
        </Box>
      );
    });
  } else {
    countriesCards = countries.map((country) => {
      return (
        <Box
          sx={{
            display: "flex",
            mb: 4
          }}
          key={country.cca3}>
          <CountryCard
            sx={{
              flexGrow: 1,
              height: "100%"

            }}
            country={country}
          />
        </Box>
      );
    });
  }

  return (
    <Box
      display="grid"
      sx={{
        gridTemplateColumns: {
          xs: "repeat(1, minmax(0, 1fr));", md: "repeat(2, minmax(0, 1fr));", xl: "repeat(3, minmax(0, 1fr));"
        },
        columnGap: "2rem",
        ...sx
      }}
    >
      {countriesCards}
    </Box>
  );
}

export default CountriesList;
