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
import {useDrop} from "react-dnd";
import {dragTypes} from "../../utilities/Constants";
import {useState} from "react";

function Favourite({countries = {}, sx = {}, elevation = 1, onDrop, onCountryDelete}) {
  const [elementDeleted, setElementDeleted] = useState(false);

  const [{isOver}, drop] = useDrop({
    accept: dragTypes.COUNTRY_CARD,
    drop: (item, monitor) => onDrop(item),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  function deleteCountry(code) {
    onCountryDelete(code);
    setElementDeleted((prevState) => !prevState);
  }

  const countriesContent = Object.entries(countries).map(([code, value]) => {
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
      ref={drop}
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
