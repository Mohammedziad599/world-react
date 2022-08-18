import "./ThemeSwitcher.css";
import Dropdown from "../dropdown/Dropdown";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";
import {themeCodes} from "../../utilities/Constants";

function ThemeSwitcher({sx = {}}) {
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

  const setTheme = (item) => {
    setCurrentTheme(item.code);
  };

  const leftIcon = (currentTheme === themeCodes.AUTO ?
    <AutoAwesomeOutlinedIcon sx={{mr: 0.5}}/> :
    (currentTheme === themeCodes.DARK ? <DarkModeOutlinedIcon sx={{mr: 0.5}}/> :
      <LightModeOutlinedIcon sx={{mr: 0.5}}/>));

  const items = [
    {
      label: "Light",
      iconLeft: <LightModeOutlinedIcon sx={{mr: 0.5}}/>,
      code: themeCodes.LIGHT,
      onClick: setTheme
    },
    {
      label: "Dark",
      iconLeft: <DarkModeOutlinedIcon sx={{mr: 0.5}}/>,
      code: themeCodes.DARK,
      onClick: setTheme
    },
    {
      label: "Auto",
      iconLeft: <AutoAwesomeOutlinedIcon sx={{mr: 0.5}}/>,
      code: themeCodes.AUTO,
      onClick: setTheme
    }
  ];

  return (
    <Dropdown
      sx={{...sx}}
      label={currentTheme === themeCodes.AUTO ? "Auto" : (currentTheme === themeCodes.DARK ? "Dark" : "Light")}
      iconLeft={leftIcon}
      items={items}
    />
  );
}

export default ThemeSwitcher;
