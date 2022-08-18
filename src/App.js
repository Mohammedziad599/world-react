import "./App.css";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import Header from "./components/header/Header";
import {ThemingProvider} from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (<>
    <ThemingProvider>
      <Header/>
      <main className="h-100">
        <Container>
          <Outlet/>
        </Container>
      </main>
    </ThemingProvider>
  </>);
}

export default App;
