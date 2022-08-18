import "./Header.css";
import {AppBar, Container, Toolbar, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

function Header() {
  const theme = useTheme();

  return (
    <header>
      <AppBar position="static" color="default">
        <Container>
          <Toolbar sx={{justifyContent: "space-between"}} disableGutters>
            <Link to="/" className="decoration-none">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary
                }}
              >
                Where in the world?
              </Typography>
            </Link>
            <ThemeSwitcher/>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
