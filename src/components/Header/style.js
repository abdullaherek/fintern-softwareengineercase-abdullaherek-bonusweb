import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #badefc;
  width: 100%;
  height: 10vh;
  display: flex;
`;

export const HeaderLink = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;

  &:hover {
    color: blue;
  }
`;
