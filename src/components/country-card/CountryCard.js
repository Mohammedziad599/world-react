import './CountryCard.css';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function CountryCard(props) {
  const {
    flags = "",
    name = "",
    alt = name + " Flag",
    population = "",
    region = "",
    capital = "",
    code = ""
  } = props.country;

  return (
    <>
      <Card>
        <CardActionArea component={Link} to={"/country/" + code}>
          <CardMedia
            component="img"
            sx={{
              height: {
                sm: "fit-content",
                md: "17rem",
                lg: "14rem",
                xl: "10rem"
              }
            }}
            image={flags.svg}
            alt={alt}
          />
          <CardContent>
            <Typography variant="h5">
              {name.common}
            </Typography>
            <Typography variant="body2">
              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  mr: 0.5
                }}>
                Population:
              </Typography>
              {population}
            </Typography>
            <Typography variant="body2">
              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  mr: 0.5
                }}>
                Region:
              </Typography>
              {region}
            </Typography>
            <Typography variant="body2">
              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  mr: 0.5
                }}>
                Capital:
              </Typography>
              {capital[0]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CountryCard;
