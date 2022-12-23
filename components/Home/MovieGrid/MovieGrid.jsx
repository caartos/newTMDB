import { Box, Typography, Grid, Item } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ gridMovies }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          alignContent: "flex-start",
          padding: "30px 40px",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "2em",
            marginBottom: "20px",
            marginLeft: "5%",
            width: "100%",
            fontFamily: "monospace"
          }}
        >
          MORE POPULAR MOVIES
        </Typography>
        <Grid
          container
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {gridMovies.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MovieGrid;
