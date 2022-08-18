import "./Search.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {Box, Input, Paper, useTheme} from "@mui/material";
import {useState} from "react";

function Search({onEnter, sx = {}}) {
  const theme = useTheme();

  const [searchElement, setSearchElement] = useState(null);

  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === 13) {
      onEnter(event.target.value);
    }
  }

  return (
    <Paper
      elevation={1}
      style={{
        cursor: "text"
      }}
      sx={{
        border: "2px solid transparent",
        ":focus-within": {
          border: "2px solid " + theme.palette.primary.main
        },
        ...sx
      }}
    >
      <Box
        onClick={() => searchElement.focus()}
        sx={{display: "flex", alignItems: "center", paddingX: 1.5, paddingY: 1}}>
        <SearchRoundedIcon
          sx={{color: "action.active", mr: 1, my: 0.5, ml: 2}}
        />
        <Input
          id="search-input"
          placeholder="Search for a country..."
          inputRef={(textField) => {
            setSearchElement(textField);
          }}
          sx={{
            width: "100%",
            mr: 1
          }}
          type="text"
          onKeyDown={onKeyDown}
          disableUnderline={true}
        />
      </Box>
    </Paper>
  );
}

export default Search;
