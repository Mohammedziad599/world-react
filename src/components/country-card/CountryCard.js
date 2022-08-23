import "./CountryCard.css";
import {Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Skeleton, Typography} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import FavouriteContext from "../../contexts/FavouriteContext/FavouriteContext";

function CountryCard({country = {}, loading = false, sx = {}}) {
  const {
    flags = {}, name = {}, alt = `${name.common} Flag`, population = 0, region = "", capital = "", code = country.cca3
  } = country;

  const [favourite, addToFavourite, removeFromFavourite] = useContext(FavouriteContext);

  const [key, setKey] = useState(0);

  const [dragging, setDragging] = useState(false);

  const onDrag = (event) => {
    event.dataTransfer.setData("country", JSON.stringify(country));
    setDragging(true);
  };

  if (loading) {
    return (
      <Card>
        <CardMedia>
          <Skeleton sx={{
            height: {
              xs: 200, sm: 300, md: "15rem", lg: "14rem", xl: "10rem"
            }
          }} animation="wave" variant="rounded"/>
        </CardMedia>
        <CardContent>
          <Skeleton
            sx={{
              mb: 1.5
            }}
            animation="wave" variant="rounded"/>
          <Skeleton
            sx={{
              height: 6,
              mb: 1,
              width: "70%"
            }}
            animation="wave" variant="rounded"/>
          <Skeleton
            sx={{
              height: 6,
              mb: 1,
              width: "70%"
            }}
            animation="wave" variant="rounded"/>
          <Skeleton
            sx={{
              height: 6,
              mb: 1,
              width: "70%"
            }}
            animation="wave" variant="rounded"/>
        </CardContent>
      </Card>
    );
  }

  function toggleFavourite(event) {
    event.preventDefault();
    if (!favourite[code]) {
      addToFavourite(country);
    } else {
      removeFromFavourite(code);
    }
    setKey((prevState) => prevState + 1);
  }

  return (
    <Card
      draggable
      onDragStart={onDrag}
      onDragEnd={() => setDragging(false)}
      sx={{
        opacity: dragging ? "50%" : "100%",
        ...sx
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          ...sx
        }}
        component={Link}
        to={`/country/${code}`}
      >
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: "fit-content", md: "13rem", lg: "14rem", xl: "10rem"
            }
          }}
          image={flags.svg}
          alt={alt}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            width: "100%"
          }}
        >
          <Grid
            container
            display="flex"
            direction="column"
            sx={{
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <Grid
              item
            >

              <Typography
                variant="h6"
                sx={{
                  mb: 1.5
                }}
              >
                {name.common}
              </Typography>
            </Grid>
            <Grid
              item
            >
              <Typography variant="body2">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold", mr: 0.5
                  }}>
                  Population:
                </Typography>
                {population}
              </Typography>
              <Typography variant="body2">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold", mr: 0.5
                  }}>
                  Region:
                </Typography>
                {region}
              </Typography>
              <Typography variant="body2">
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold", mr: 0.5
                  }}>
                  Capital:
                </Typography>
                {capital[0]}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: {
                  xs: "flex"
                },
                justifyContent: "flex-end"
              }}
            >
              <IconButton
                sx={{
                  display: {
                    xs: "block",
                    md: "none"
                  }
                }}
                key={key}
                onClick={toggleFavourite}
              >
                {
                  favourite[code] ? (
                    <StarRoundedIcon sx={{color: "#ffaa00"}}/>
                  ) : (
                    <StarBorderRoundedIcon/>
                  )
                }
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
