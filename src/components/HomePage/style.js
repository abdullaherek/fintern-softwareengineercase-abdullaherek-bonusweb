import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomePageJumbotron = styled.div`
  width: 50%;
  margin: 0 auto;
  color: white;
  padding: 2rem;
  margin-top: 1rem;
  border: 1 px solid pink;
  border-radius: 3px;
  height: 10vh;
  background: #046a90;
`;

export const MoviesDiv = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 2rem;
  height: 100%;
`;

export const MovieDiv = styled.div`
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 2rem;
  margin-right: 0.15rem;
  margin-bottom: 2rem;
  border: 2px solid grey;
  border-radius: 4px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;
