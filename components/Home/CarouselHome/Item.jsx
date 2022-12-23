import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ItemCircularProgress from "./CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Item({ item }) {
  const year = `(${item.release_date.slice(0, 4)})`;

  const [movie, setMovie] = useState(null);
  const genres = movie
    ? movie.genres.map((genre) => {
        return genre.name;
      })
    : null;

  function duration(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return hours + "h " + minutes + "m";
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.id}?api_key=7052bbc22fda821b8ab3d258c4794811&language=en-US`
      )
      .then((movie) => {
        console.log(movie.data);
        setMovie(movie.data);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <CardMedia
      sx={{
        backgroundSize: "relative",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to bottom right, rgba(31.5, 31.5, 31.5, 1), rgba(31.5, 31.5, 31.5, 0.84)), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path})`,
        position: "relative",
        width:"100%",
        zIndex:"1"
      }}
    >
      <Box padding="30px 40px">
        <Container sx={{ display: "flex", flexWrap: "nowrap" }}>
          <Box
            minWidth="300px"
            width="300px"
            heigth="450px"
            overflow="hidden"
            borderRadius="5px"
          >
            <Box
              display="block"
              minWidth="300px"
              width="300px"
              heigth="450px"
              position="relative"
              top="0"
              left="0"
            >
              <Box minWidth="100%" width="100%" heigth="100%">
                {movie ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  />
                ) : null}
              </Box>
            </Box>
          </Box>
          <Box display="flex" >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "flex-start",
                alignContent: "center",
                paddingLeft: "40px",  
                marginTop: "30px",
                marginLeft: "20px",
              }}
            >
              <Box
                width="100%"
                marginBottom="24px"
                display="flex"
                flexWrap="wrap"
              >
                <Typography
                  variant="h2"
                  fontSize="2.2rem"
                  width="100%"
                  fontWeight="600"
                >
                  <Link
                    fontWeight="700"
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    {item.original_title}
                  </Link>
                  <Box
                    color="rgba(255,255,255,0.6)"
                    component="span"
                    sx={{
                      opacity: "0.8",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    fontWeight="400"
                  >
                    {" "}
                    {year}
                  </Box>
                </Typography>
                <Box display="flex" color="#fff">
                  <Box
                    component="span"
                    border="1px solid rgba(255,255,255,0.6)"
                    display="inline-flex"
                    whiteSpace="nowrap"
                    alignItems="center"
                    alignContent="center"
                    padding="0.06em 4px 0.15em 4px !important"
                    lineHeight="1"
                    borderRadius="2px"
                    marginRight="7px"
                    color="rgba(255,255,255,0.6)"
                  >
                    {movie && movie.adult === false ? "PG-13" : "PG-18"}
                  </Box>
                  <Box component="span" paddingRight="6px">
                    {movie
                      ? movie.release_date +
                        " (" +
                        movie.original_language.toUpperCase() +
                        ")"
                      : null}
                  </Box>
                  <Box component="span" paddingRight="6px">
                    {genres ? `- ${genres.join(", ")}` : null}
                  </Box>
                  <Box component="span">
                    {movie ? `- ${duration(movie.runtime)}` : null}
                  </Box>
                </Box>
              </Box>

              <List
                sx={{
                  marginBottom: "20px",
                  width: "100%",
                  height: "68px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  listStyleType: "none",
                  color: "#fff",
                }}
              >
                <ListItem
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                    height: "68px",
                  }}
                >
                  <Box
                    sx={{
                      width: "68px",
                      height: "68px",
                      display: "inline-block",
                      transition: "transform .2s",
                      transform: "scale(1)",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        display: "inline-block",
                        borderRadius: "50%",
                        padding: "4px",
                        backgroundColor: "black",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          display: "inline-block",
                          width: "100%",
                          height: "100%",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            diplay: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ItemCircularProgress value={item.vote_average} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    fontWeight="700"
                    marginLeft="6px"
                    whiteSpace="pre-line"
                    color="#fff"
                  >
                    User <br /> Score
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "3px 0",
                    marginRight: "0",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: "68px",
                        height: "68px",
                        backgroundColor: "#142f5d",
                      }}
                    >
                      <FavoriteIcon sx={{ cursor: "pointer" }} />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
                <ListItem
                  sx={{ marginRight: "0", color: "#fff" }}
                >
                  <Box
                    display="inherit"
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                  >
                    <ListItemAvatar>
                      <PlayArrowIcon fontSize="large" />
                    </ListItemAvatar>
                    <ListItemText primary="Play Trailer" />
                  </Box>
                </ListItem>
              </List>
              <Box sx={{ color: "#fff" }}>
                <Typography
                  sx={{
                    variant: "h3",
                    opacity: "0.7",
                    fontStyle: "italic",
                    fontWeight: "400",
                    fontSize: "1.1em",
                    marginBottom: "0",
                    width: "100%",
                  }}
                >
                  {movie ? movie.tagline : null}
                </Typography>
                <Typography
                  sx={{
                    variant: "h3",
                    fontWeight: "600",
                    fontSize: "1.3em",
                    marginTop: "10px",
                  }}
                >
                  Overview
                </Typography>
                <Box>
                  <Typography sx={{ fontSize: "1em" }}>
                    {movie ? movie.overview : null}
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </CardMedia>
  );
}

export default Item;
