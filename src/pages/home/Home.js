import "./Home.css";
import Search from "../../components/search/Search";
import {Alert, Grid, Paper, Snackbar} from "@mui/material";
import FilterMenu from "../../components/filter-menu/FilterMenu";
import Favourite from "../../components/favourite/Favourite";
import CountriesList from "../../components/countries-list/CountriesList";
import {useEffect, useState} from "react";
import {getAllCountries, searchCountriesByName} from "../../utilities/requests/CountriesRequests";
import {filterCodes} from "../../utilities/Constants";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {readFavouriteCountriesLocalstorage, setFavouriteCountriesLocalstorage} from "../../utilities/localstorage";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [snackbarStatus, setSnackbarStatus] = useState(false);
  const [snackbarType, setSnackbarType] = useState("success");
  const [countries, setCountries] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [favouriteCountries, setFavouriteCountries] = useState({});

  function onSearchChange(value) {
    if (value.trim() !== search.trim()) {
      setSearch(value);
      setLoading(true);
    }
  }

  function closeSnackbar() {
    setSnackbarStatus(false);
  }

  function onFavouriteDrop(item) {
    setFavouriteCountries((prevState) => {
      prevState[item.country.cca3] = {
        name: item.country.name.common,
        flag: item.country.flag
      };
      setFavouriteCountriesLocalstorage(prevState);
      return prevState;
    });
  }

  function onFavouriteCountryDelete(code) {
    setFavouriteCountries((prevState) => {
      delete prevState[code];

      //TODO TEMP Solution
      setFavouriteCountriesLocalstorage(prevState);
      return prevState;
    });
  }

  function setData(loading, countries, snackbarStatus, snackbarType, snackbarMessage) {
    setLoading(loading);
    setCountries(countries);
    setSnackbarStatus(snackbarStatus);
    setSnackbarType(snackbarType);
    setSnackbarMessage(snackbarMessage);
  }

  function filterData(data, filter) {
    let filteredData;
    if (filter === filterCodes.NO_FILTER) {
      filteredData = data;
    } else if (filter === filterCodes.FAVOURITES) {
      filteredData = data.filter();
    } else {
      filteredData = data.filter((country) => {
        return country.region.toUpperCase() === filter;
      });
    }
    return filteredData;
  }

  function onFilterChange(value) {
    setFilter(value);
  }

  useEffect(() => {
    setFavouriteCountries(readFavouriteCountriesLocalstorage());
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      getAllCountries().then(data => {
        data = filterData(data, filter);
        setData(false, data, false, "", "");
      }).catch(error => {
        setData(false, [], true, "error", error.message);
      });
    } else {
      searchCountriesByName(search).then(data => {
        setData(false, data, false, "", "");
      }).catch(() => {
        setData(false, [], true, "error", "No countries found");
      });
    }
  }, [search, filter]);


  //TODO fix this
  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log(favouriteCountries);
  // }, [favouriteCountries]);

  return (
    <>
      <Grid
        container
        sx={{
          py: 2, justifyContent: "space-between"
        }}
      >
        <Grid
          item
          display="flex"
          xs={12}
          md={5}
          lg={4}
          sx={{
            my: 1.5
          }}
        >
          <Search
            sx={{
              flexGrow: 1
            }}
            placeholder="Search"
            onEnter={onSearchChange}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          lg={2}
          sx={{
            my: 1.5
          }}
        >
          <Paper
            elevation={1}
            sx={{
              width: "100%"
            }}
          >
            <FilterMenu
              sx={{
                width: "100%", py: 1.75
              }}
              onFilterChange={onFilterChange}
            >
            </FilterMenu>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: {
            xs: "fit-content", lg: "calc(100vh - 11rem)"
          }
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <Grid
            item
            lg={3}
            sx={{
              pr: 2, display: {
                xs: "none", lg: "block"
              }
            }}>
            <Favourite
              sx={{
                height: {
                  xs: "0", lg: "calc(100vh - 11.8rem)"
                },
                overflow: "scroll"
              }}
              onDrop={onFavouriteDrop}
              onCountryDelete={onFavouriteCountryDelete}
              countries={favouriteCountries}
            />
          </Grid>
          <Grid
            sx={{
              height: {
                xs: "0", lg: "calc(100vh - 11rem)"
              },
              flexGrow: "1 !important",
              maxWidth: "100% !important",
              overflowY: "scroll",
              margin: "0px -0.5rem",
              padding: "0px 0.5rem"
            }}
            item
            xs={12}
            lg={9}>
            {
              (countries.length !== 0) && (
                <CountriesList
                  countries={countries}
                  loading={loading}/>
              )
            }
          </Grid>
        </DndProvider>
      </Grid>
      {
        (snackbarStatus) && (
          <Snackbar
            sx={{
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }}
            open={snackbarStatus}
            message={"Not Found"}
          >
            <Alert onClose={closeSnackbar} variant="filled" severity={snackbarType} sx={{width: "100%"}}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        )
      }
    </>
  );
}

export default Home;
