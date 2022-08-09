import './CountryDetails.css';
import {Button, Grid, Paper, Stack, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

function CountryDetails(props) {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        columns={{
          xs: 1,
          lg: 2,
        }}
        spacing={4}
      >
        <Grid item xs={1} md={1}>
          <img
            src="https://flagcdn.com/kw.svg"
            alt="Kuwait Flag"
            style={{
              width: "100%",
              filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
              borderRadius: "0.25rem"
            }}
          />
        </Grid>
        <Grid
          item xs={1}
          md={1}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3
            }}
          >
            Kuwait
          </Typography>
          <Grid
            display="flex"
            direction={{
              xs: "column",
              md: "row"
            }}
            sx={{
              justifyContent: "space-between"
            }}
          >
            <Stack
              item
              sx={{
                my: 2
              }}
            >
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Native Name:
                </Typography>
                kuwait
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Population:
                </Typography>
                4,270,563
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Region:
                </Typography>
                Asia
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Sub Region:
                </Typography>
                Western Asia
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Capital:
                </Typography>
                Kuwait City
              </Typography>
            </Stack>
            <Stack
              item
              sx={{
                my: 2
              }}
            >
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Top Level Domain:
                </Typography>
                .kw
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Currencies:
                </Typography>
                Kuwaiti dinar
              </Typography>
              <Typography
                sx={{
                  my: 0.25
                }}
                variant="p">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    mr: 0.5
                  }}>
                  Languages:
                </Typography>
                Arabic
              </Typography>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            direction="row"
            sx={{
              py: 6,
              flexWrap: "wrap"
            }}
            flexWrap>
            <Typography
              variant="p"
              sx={{
                width: {
                  xs: "100%",
                  md: "fit-content"
                },
                fontWeight: "bold",
                mr: 1,
                display: "flex",
                alignItems: "center"
              }}>
              Border Countries:
            </Typography>
              {/*TODO put this in the function body with an array map*/}
              <Paper
                sx={{
                  mr: 1.5,
                  my: 1
                }}
                elevation={1}>
                <Button
                  component={Link}
                  to={"/"}
                  sx={{
                    py: 1,
                    px: 1.5,
                    color: theme.palette.mode === "dark" ? theme.palette.grey["100"] : theme.palette.grey["900"],
                    ":hover": {
                      backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey["800"] : theme.palette.grey["200"]
                    },
                  }}
                >
                  Iraq
                </Button>
              </Paper>
              <Paper
                sx={{
                  mr: 1.5,
                  my: 1
                }}
                elevation={1}>
                <Button
                  component={Link}
                  to={"/"}
                  sx={{
                    py: 1,
                    px: 1.5,
                    color: theme.palette.mode === "dark" ? theme.palette.grey["100"] : theme.palette.grey["900"],
                    ":hover": {
                      backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey["800"] : theme.palette.grey["200"]
                    },
                  }}
                >
                  Saudi Arabia
                </Button>
              </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CountryDetails;
