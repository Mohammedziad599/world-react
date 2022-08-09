import './App.css';
import {Outlet} from "react-router-dom";
import {Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import Header from "./components/header/Header";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    ()=> createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light"
      }
    }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className="h-100">
        <Container>
          <Outlet />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
