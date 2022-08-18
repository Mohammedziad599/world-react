import "./Details.css";
import {Link, useParams} from "react-router-dom";
import {Button, Grid, Paper, useTheme} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CountryDetails from "../../components/country-details/CountryDetails";
import {useEffect, useState} from "react";
import {getCountryDetailsFromCode, getCountryName} from "../../utilities/requests/CountriesRequests";

function Details() {
  const {countryCode} = useParams();

  const [loading, setLoading] = useState(true);
  const [countryDetail, setCountryDetail] = useState({});

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    getCountryDetailsFromCode(countryCode)
      .then(data => {
        let fetches = [];
        let borders = [];
        for (const countryCode of data.borders) {
          fetches.push(
            getCountryName(countryCode)
              .then(country => borders.push({
                code: countryCode,
                name: country.name.common
              }))
              .catch(error => console.error(error))
          );
        }
        Promise.all(fetches).then(() => {
          data.borders = borders;
          setCountryDetail(data);
          setLoading(false);
        });
      })
      .catch(error => console.error(error));
  }, [countryCode]);

  return (
    <>
      <Grid
        container
        sx={{
          py: 3, justifyContent: "space-between"
        }}
      >
        <Paper
          elevation={1}
        >
          <Button
            component={Link}
            to={"/"}
            sx={{
              px: 2,
              py: 1.5,
              color: theme.palette.mode === "dark" ? theme.palette.grey["100"] : theme.palette.grey["900"],
              ":hover": {
                backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey["800"] : theme.palette.grey["200"]
              }
            }}
          >
            <ArrowBackOutlinedIcon
              sx={{
                mr: 1
              }}
            />
            Go to Home
          </Button>
        </Paper>
      </Grid>
      <Grid container>
        <CountryDetails
          loading={loading}
          country={countryDetail}
        />
      </Grid>
    </>
  );
}

export default Details;