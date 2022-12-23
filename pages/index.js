import React from "react";
import Navbar from "../components/Navbar";
import fetch from "isomorphic-fetch";
import CarouselHome from "../components/Home/CarouselHome/CarouselHome";
import MovieGrid from "../components/Home/MovieGrid/MovieGrid"

const Home = ({ popularMovies, popularTvShow }) => {
    const carouselMovies = popularMovies.results.slice(0,5)
    const gridMovies = popularMovies.results.slice(4,20)
    console.log(popularMovies)
  return (
    <>
      <Navbar />
      <CarouselHome carouselMovies={carouselMovies}/>
      <MovieGrid gridMovies={gridMovies}/>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
    const token = "7052bbc22fda821b8ab3d258c4794811";
    const resMovie = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`
    );
    const dataMovie = await resMovie.json();
    const resTvShow = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${token}&language=en-US&page=1`
    );
    const dataTvShow = await resTvShow.json();
    return { props: { popularMovies: dataMovie, popularTvShow: dataTvShow } };
  }
