import "./FilterMenu.css";
import Dropdown from "../dropdown/Dropdown";
import {useState} from "react";
import {filterCodes} from "../../utilities/Constants";

function FilterMenu({onFilterChange, sx = {}}) {
  const [filterValue, setFilterValue] = useState(filterCodes.NO_FILTER);

  function onItemClick(item) {
    if (filterValue === item.label) {
      setFilterValue(filterCodes.NO_FILTER);
      onFilterChange(filterCodes.NO_FILTER);
    } else {
      onFilterChange(item.code);
      setFilterValue(item.label);
    }
  }

  const items = [
    {
      label: "Africa",
      code: filterCodes.AFRICA,
      onClick: onItemClick
    },
    {
      label: "Americas",
      code: filterCodes.AMERICAS,
      onClick: onItemClick
    },
    {
      label: "Asia",
      code: filterCodes.ASIA,
      onClick: onItemClick
    },
    {
      label: "Europe",
      code: filterCodes.EUROPE,
      onClick: onItemClick
    },
    {
      label: "Oceania",
      code: filterCodes.OCEANIA,
      onClick: onItemClick
    },
    {
      label: "Favourites",
      code: filterCodes.FAVOURITES,
      onClick: onItemClick
    }
  ];

  return (
    <>
      <Dropdown
        sx={{
          ...sx
        }}
        label={(filterValue !== filterCodes.NO_FILTER ? filterValue : "Filter By")}
        enableDropdownArrow={true}
        items={items}
      />
    </>
  );
}

export default FilterMenu;
