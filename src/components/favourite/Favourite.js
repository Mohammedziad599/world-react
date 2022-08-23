import "./Favourite.css";

import {
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
import {useContext, useState} from "react";
import FavouriteContext from "../../contexts/FavouriteContext/FavouriteContext";

function Favourite({sx = {}, elevation = 1}) {
  const [favourite, addToFavourite, removeFromFavourite] = useContext(FavouriteContext);

  const [isOver, setIsOver] = useState(false);

  const [rerender, setRerender] = useState(false);

  const onDragOver = (event) => {
    event.preventDefault();
    setIsOver(true);
  };

  const onDragleave = () => {
    setIsOver(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsOver(false);
    let country = JSON.parse(event.dataTransfer.getData("country"));
    if (country) {
      addToFavourite(country);
    }
  };

  function deleteCountry(code) {
    removeFromFavourite(code);
    setRerender((prevState) => !prevState);
  }

  const countriesContent = Object.entries(favourite).map(([code, value]) => {
    return (
      <ListItem
        key={code}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteCountry(code)}>
            <DeleteIcon/>
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton component={Link} to={"/country/" + code}>
          <ListItemText primary={`${value.flag} ${value.name}`}/>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Paper
      onDragOver={onDragOver}
      onDragLeave={onDragleave}
      onDropCapture={onDrop}
      sx={{
        border: "2px solid",
        borderColor: isOver ? "green" : "transparent",
        ...sx
      }}
      elevation={elevation}>
      <aside
        aria-label="Favorite Countries">
        <List
          aria-labelledby="fav-header"
          subheader={
            <ListSubheader disableGutters component="header" id="fav-header">
              <Paper
                sx={{
                  px: 2,
                  py: 2,
                  userSelect: "none"
                }}
                elevation={elevation}>
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
