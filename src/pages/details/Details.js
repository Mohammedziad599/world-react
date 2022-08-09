import "./Details.css";
import {Link, useParams} from "react-router-dom";
import {Button, Grid, Paper, useTheme} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CountryDetails from "../../components/country-details/CountryDetails";

function Details() {
  const {countryCode} = useParams();
  const theme = useTheme();
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
              },
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
      <Grid>
        <CountryDetails/>
      </Grid>
    </>
  );
}

export default Details;