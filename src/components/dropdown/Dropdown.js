import "./Dropdown.css";
import {Button, Menu, MenuItem, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {useState} from "react";

function Dropdown({
                    items = [], sx = {}, iconLeft = "",
                    label = "", iconRight = {}, enableDropdownArrow = false
                  }) {
  const [menu, setMenu] = useState(null);
  const theme = useTheme();

  const itemsContent = items.map(item => {
    return (
      <MenuItem
        key={item.code}
        onClick={() => item.onClick(item) || handleClose()}
      >
        {item.iconLeft}
        {item.label}
        {item.iconRight}
      </MenuItem>
    );
  });

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  return (
    <>
      <Button
        aria-controls={!!menu ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={!!menu ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: theme.palette.mode === "dark" ? theme.palette.grey["100"] : theme.palette.grey["900"],
          ":hover": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey["800"] : theme.palette.grey["200"]
          },
          ...sx
        }}
      >
        {iconLeft}
        {label}
        {iconRight}
        {enableDropdownArrow ? (!!menu ? <KeyboardArrowUpIcon sx={{ml: 0.5}}/> :
          <KeyboardArrowDownIcon sx={{ml: 0.5}}/>) : ("")}
      </Button>
      <Menu
        anchorEl={menu}
        open={!!menu}
        onClose={handleClose}
      >
        {itemsContent}
      </Menu>
    </>
  );
}

export default Dropdown;
