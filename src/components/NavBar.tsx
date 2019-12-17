import React from "react";
import logoImg from "../assets/logo.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  NavBarWrapper,
  Logo,
  StyledLink,
  P,  
  TextButton
} from "../styled";
import { useAuth } from "../context/AuthContext";

const NavBar: React.FC = () => {
  const location = useLocation();
  const auth = useAuth();

  React.useEffect(() => {});
  return (
    <NavBarWrapper>
      <Link to="/">
        <Logo src={logoImg} alt="logo" />
      </Link>

      {auth.user.doctor ? (
        <P>
          {`Welcom doctor ${auth.user.doctor.firstName} ${auth.user.doctor.lastName}`}{" "}
          <TextButton onClick={auth.logout}>Logout</TextButton>
        </P>
      ) : (
        <StyledLink data-active={location.pathname === "/login"} to="/login">
          {"Se Connecter"}
        </StyledLink>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
