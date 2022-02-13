 import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { MoviesContext } from "../../App";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import * as S from "./style.js";

export function MovieDetail() {
  const [state, setState] = useState([]);
  const context = useContext(MoviesContext);
  const code = useParams();
  useEffect(() => {
    setState([
      context.movies.find((detailMovie) => {
        return detailMovie.id.toString() === code.code;
      }),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(state);

  return (
    <>
      <Header />
      {state.map((st) => (
        <>
          <S.MovieDetailContainer
            props={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${st.backdrop_path}`}
          >
            <S.MovieDetailBg>
              <S.DetailImg
                src={`https://image.tmdb.org/t/p/w200/${st.poster_path}`}
                alt={st.original_title}
              />
              <S.MovieDetailContent>
                Filmin Adı: {st.title}
              </S.MovieDetailContent>
              <S.MovieDetailContent>Özet: {st.overview}</S.MovieDetailContent>
              <S.MovieDetailContent>
                Çıkış Tarihi: {st.release_date}
              </S.MovieDetailContent>
              <S.MovieDetailContent>
                Puan: {st.vote_average}
              </S.MovieDetailContent>
            </S.MovieDetailBg>
          </S.MovieDetailContainer>
        </>
      ))}
      <Footer />
    </>
  );
}
