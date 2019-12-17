import React from "react";
import logoImg from "../assets/logo.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { NavBarWrapper, Logo, StyledLink } from "../styled";
import { useAuth } from "../context/AuthContext";

const NavBar: React.FC = () => {
  const location = useLocation();
  const user = useAuth();

  React.useEffect(() => {
    console.log(user);
  });
  return (
    <NavBarWrapper>
      <Link to="/">
        <Logo src={logoImg} alt="logo" />
      </Link>

      <StyledLink data-active={location.pathname === "/login"} to="/login">
        {user.doctor ? "Welcom doctor" : "Se Connecter"}
      </StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;
