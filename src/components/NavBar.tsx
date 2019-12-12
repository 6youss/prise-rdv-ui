import React from "react";
import NavBarWrapper from "../styled/NavBarWrapper";
import logoImg from "../assets/logo.svg";
import Logo from "../styled/Logo";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import StyledLink from "../styled/StyledLink";

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <NavBarWrapper>
      <Link to="/">
        <Logo src={logoImg} alt="logo" />
      </Link>

      <StyledLink data-active={location.pathname === "/login"} to="/login">
        Se Connecter
      </StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;
