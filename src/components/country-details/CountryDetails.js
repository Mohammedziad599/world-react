import "./CountryDetails.css";
import {Grid, Skeleton} from "@mui/material";
import CountryInformation from "../country-information/CountryInformation";

function CountryDetails({country = {}, loading = false}) {
  const {
    name = {},
    flags = {}
  } = country;

  const flagElement = loading ? (
        <Grid
          item
          xs={1}
          md={1}
        >
          <Skeleton
            sx={{
              height: {
                xs: "15rem", sm: "25rem", md: "35rem", lg: "20rem", xl: "20rem"
              }
            }}
            animation="wave"
            variant="rounded"
          />
        </Grid>
      ) :
      (
        <Grid
          item
          xs={1}
          md={1}
        >
          <img
            src={flags.svg}
            alt={`${name.common} Flag`}
            style={{
              width: "100%",
              filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
              borderRadius: "0.25rem"
            }}
          />
        </Grid>
      )
  ;

  if (!country.name) {
    return null;
  }

  return (
    <>
      <Grid
        container
        columns={{
          xs: 1, lg: 2
        }}
        spacing={4}
      >
        {flagElement}
        <CountryInformation
          loading={loading}
          country={country}/>
      </Grid>
    </>
  );
}

export default CountryDetails;
