import {createContext, useMemo, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {themeCodes} from "../../utilities/Constants";

const ThemeContext = createContext();

export function ThemingProvider({children}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useState(themeCodes.AUTO);

  const muiTheme = useMemo(
    () => {
      const colorThemeTransition = {
        styleOverrides: {
          root: {
            transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out"
          }
        }
      };

      return createTheme({
        palette: {
          mode: theme === themeCodes.AUTO ? (prefersDarkMode ? "dark" : "light") : theme
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out"
              },
              ".MuiMenu-paper": {
                transition: `color 0.2s ease-in-out,
                 background-color 0.2s ease-in-out,
                 opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                 transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important`
              }
            }
          },
          MuiAppBar: {
            ...colorThemeTransition
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out"
              }
            }
          },
          MuiPaper: {
            ...colorThemeTransition
          },
          MuiMenu: {
            ...colorThemeTransition
          },
          MuiListSubheader: {
            ...colorThemeTransition
          }
        }
      });
    },
    [prefersDarkMode, theme]
  );

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
