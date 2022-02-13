import React from "react";
import { HeaderDiv, HeaderLink, StyledLink } from "./style.js";
import ReactLogo from "../../logo.svg";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <HeaderDiv>
      <Link to="/">
        <img
          src={ReactLogo}
          alt="React Logo"
          style={{ width: "100px", height: "10   vh" }}
        />
      </Link>
      <HeaderLink>
        <StyledLink to="/">Ana Sayfa</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </HeaderLink>
    </HeaderDiv>
  );
}
