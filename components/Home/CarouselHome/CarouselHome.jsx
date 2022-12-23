import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function CarouselHome({ carouselMovies }) {
  return (
    <Carousel sx={{height:"510px"}}>
      {carouselMovies.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselHome;
