import "./CountryInformation.css";
import {Button, Grid, Paper, Skeleton, Stack, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

function CountryInformation({country = {}, loading = false}) {
  const {
    name = {nativeName: {key: {common: ""}}},
    nativeName = name.nativeName[Object.keys(name.nativeName)[0]].common,
    population = 0,
    region = "",
    subregion = "",
    capital = [],
    tld = [],
    currencies = {},
    currenciesKeys = Object.keys(currencies).map(key => {
      return key;
    }),
    languages = {},
    languagesNames = Object.keys(languages).map(key => {
      return languages[key];
    }),
    borders = []
  } = country;

  const theme = useTheme();

  const leftListElements = loading ? (
    <Stack
      sx={{
        my: 2,
        width: "100%"
      }}
    >
      <Skeleton
        height={"1rem"}
        sx={{
          mb: 1.5,
          width: "100%"
        }}
        animation="wave" variant="rounded"/>
      <Skeleton
        height={"1rem"}
        sx={{
          mb: 1.5,
          width: "100%"
        }}
        animation="wave" variant="rounded"/>
      <Skeleton
        height={"1rem"}
        sx={{
          mb: 1.5,
          width: "100%"
        }}
        animation="wave" variant="rounded"/>
      <Skeleton
        height={"1rem"}
        sx={{
          mb: 1.5,
          width: "100%"
        }}
        animation="wave" variant="rounded"/>
      <Skeleton
        height={"1rem"}
        sx={{
          mb: 1.5,
          width: "100%"
        }}
        animation="wave" variant="rounded"/>
    </Stack>
  ) : (
    <Stack
      sx={{
        my: 2
      }}
    >
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Native Name:
        </Typography>
        {nativeName}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Population:
        </Typography>
        {population}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Region:
        </Typography>
        {region}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Sub Region:
        </Typography>
        {subregion}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Capital:
        </Typography>
        {capital}
      </Typography>
    </Stack>
  );

  const rightListElements = loading ? ("") : (
    <Stack
      sx={{
        my: 2
      }}
    >
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Top Level Domain:
        </Typography>
        {tld.join(" ,")}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Currencies:
        </Typography>
        {currenciesKeys.join(" ,")}
      </Typography>
      <Typography
        sx={{
          my: 0.25
        }}
        variant="p">
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", mr: 0.5
          }}>
          Languages:
        </Typography>
        {languagesNames.join(" ,")}
      </Typography>
    </Stack>
  );

  const borderCountries = borders.map(border => {
    return (
      <Paper
        key={border.code}
        sx={{
          mr: 1.5, my: 1
        }}
        elevation={1}>
        <Button
          component={Link}
          to={`/country/${border.code}`}
          sx={{
            py: 1,
            px: 1.5,
            color: theme.palette.mode === "dark" ? theme.palette.grey["100"] : theme.palette.grey["900"],
            ":hover": {
              backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey["800"] : theme.palette.grey["200"]
            }
          }}
        >
          {border.name}
        </Button>
      </Paper>
    );
  });

  let titleElement = loading ? (
    <Skeleton
      height={"2rem"}
      sx={{
        mb: 3,
        width: "50%"
      }}
      animation="wave" variant="rounded"/>
  ) : (
    <Typography
      variant="h4"
      sx={{
        mb: 3
      }}>
      {name.common}
    </Typography>
  );

  return (
    <Grid
      item
      xs={1}
      md={1}>
      {titleElement}
      <Grid
        container
        display="flex"
        direction={{
          xs: "column", md: "row"
        }}
        sx={{
          justifyContent: "space-between"
        }}>
        {leftListElements}
        {rightListElements}
      </Grid>
      <Grid
        display="flex"
        sx={{
          py: 6, flexWrap: "wrap", flexDirection: "row"
        }}
        flexWrap
      >
        {loading ? (
          <Skeleton
            height={"1.5rem"}
            sx={{
              width: "100%"
            }}
            animation="wave"
            variant="rounded"/>
        ) : (
          <Typography
            variant="p"
            sx={{
              width: {
                xs: "100%", md: "fit-content"
              }, fontWeight: "bold", mr: 1, display: "flex", alignItems: "center"
            }}>
            Border Countries:
          </Typography>
        )}
        {loading ? "" : borderCountries}
      </Grid>
    </Grid>
  );
}

export default CountryInformation;
