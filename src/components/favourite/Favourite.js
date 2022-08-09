import './Favourite.css';

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from "react-router-dom";

function removeFromFav(code) {
  return undefined;
}

function Favourite(props) {
  const {
    countries = []
  } = props;

  const countriesContent = countries.map((country) => {
    return (
      <ListItem
        key={country.code}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={removeFromFav(country.code)}>
            <DeleteIcon/>
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton component={Link} to={'/country/' + country.code}>
          <ListItemText primary={country.name}/>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Paper
      sx={props.sx}
      elevation={props.elevation || 1}>
      <aside aria-label="Favorite Countries">
        <List
          sx={props.sx}
          aria-labelledby="fav-header"
          subheader={
            <ListSubheader disableGutters component="header" id="fav-header">
              <Paper
                sx={{
                  px: 2,
                  py: 2,
                  userSelect: "none"
                }}
                elevation={props.elevation || 1}>
                <Typography variant="h6">
                  Favourites
                </Typography>
              </Paper>
            </ListSubheader>
          }>
          {countriesContent}
        </List>
      </aside>
    </Paper>
  );
}

export default Favourite;
