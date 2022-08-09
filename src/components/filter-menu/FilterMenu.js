import './FilterMenu.css';
import Dropdown from "../dropdown/Dropdown";
import {useState} from "react";

function FilterMenu(props) {
  const [filterValue, setFilterValue] = useState(null);

  function onItemClick(item) {
    //TODO change label
    if (filterValue?.label === item.label) {
      setFilterValue(null);
      return;
    }
    setFilterValue(item);
  }

  return (
    <>
      <Dropdown
        sx={{...props.sx}}
        label={(filterValue ? filterValue.label : "Filter By")}
        enableDropdownArrow={true}
        items={
          [
            {
              label: "Africa",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Africa"
              },
            },
            {
              label: "Americas",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Americas"
              },
            },
            {
              label: "Asia",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Asia"
              },
            },
            {
              label: "Europe",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Europe"
              },
            },
            {
              label: "Oceania",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Oceania"
              },
            },
            {
              label: "Favourites",
              onClick: onItemClick,
              itemProp: {
                "data-value": "Favourites"
              },
            }
          ]
        }
      />
    </>
  );
}

export default FilterMenu;
