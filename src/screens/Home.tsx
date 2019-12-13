import React from "react";
import HomeSearchWrapper from "../styled/HomeSearchWrapper";
import H1 from "../styled/H1";
import CenterWrapper from "../styled/CenterWrapper";
import P from "../styled/P";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {

  return (
    <HomeSearchWrapper>
      <CenterWrapper direction="column">
        <H1> Prenez rendez vous en ligne chez un professionel de santé</H1>
        <P>C'est immediat, simple et gratuit.</P>
        <SearchBar/>
      </CenterWrapper>
    </HomeSearchWrapper>
  );
};

export default Home;
