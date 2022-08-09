import './ThemeSwitcher.css';
import Dropdown from "../dropdown/Dropdown";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

function ThemeSwitcher(props) {
  const setThemeLight = (event) => {
    //TODO
    console.log("Light");
  }
  const setThemeDark = (event) => {
    //TODO
    console.log("Dark");
  }
  const setThemeAuto = (event) => {
    //TODO
    console.log("System");
  }


  return (
    <Dropdown
      sx={{...props.sx}}
      label={"Theme"}
      iconLeft={<LightModeOutlinedIcon sx={{mr: 0.5}}/>}
      items={
        [
          {
            label: "Light",
            iconLeft: <LightModeOutlinedIcon sx={{mr: 0.5}}/>,
            click: setThemeLight
          },
          {
            label: "Dark",
            iconLeft: <DarkModeOutlinedIcon sx={{mr: 0.5}}/>,
            click: setThemeDark
          },
          {
            label: "System",
            iconLeft: <AutoAwesomeOutlinedIcon sx={{mr: 0.5}}/>,
            click: setThemeAuto
          },
        ]
      }
    />
  );
}

export default ThemeSwitcher;
