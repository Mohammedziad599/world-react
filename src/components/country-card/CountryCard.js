import "./CountryCard.css";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDrag} from "react-dnd";
import {dragTypes} from "../../utilities/Constants";

function CountryCard({country = {}, loading = false, sx = {}}) {
  const {
    flags = {}, name = {}, alt = `${name.common} Flag`, population = 0, region = "", capital = "", code = country.cca3
  } = country;

  const [{isDragging}, drag] = useDrag({
    type: dragTypes.COUNTRY_CARD,
    item: {
      id: code,
      country: country
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

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

  return (
    <Card
      ref={drag}
      sx={{
        opacity: isDragging ? "50%" : "100%",
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
              sm: "fit-content", md: "17rem", lg: "14rem", xl: "10rem"
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
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
