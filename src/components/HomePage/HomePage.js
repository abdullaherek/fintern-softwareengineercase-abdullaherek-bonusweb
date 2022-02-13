import React, { useContext } from "react";
import {
  HomePageDiv,
  HomePageJumbotron,
  MoviesDiv,
  MovieDiv,
  StyledLink,
} from "./style.js";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesContext } from "../../App";

export function HomePage() {
  const context = useContext(MoviesContext);
  return (
    <>
      <Header />
      <HomePageDiv>
        <HomePageJumbotron>
          Hoş Geldiniz. Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi
          keşfedin.
        </HomePageJumbotron>
        <MoviesDiv>
          {context.movies.map((movie, i) => {
            return (
              <MovieDiv key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <StyledLink to={`/movie/${movie.id}`} key={i}>
                  <p>
                    <strong>{movie.original_title}</strong>
                  </p>
                </StyledLink>

                <p>Çıkış Tarihi: {movie.release_date}</p>
                <p>Ortalama Puanı: {movie.vote_average}</p>
              </MovieDiv>
            );
          })}
        </MoviesDiv>
      </HomePageDiv>
      <Footer />
    </>
  );
}
