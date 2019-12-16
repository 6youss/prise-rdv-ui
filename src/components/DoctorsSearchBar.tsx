import React from "react";
import RowWrapper from "../styled/RowWrapper";
import StyledInput from "../styled/StyledInput";
import Button from "../styled/Button";
import { useHistory } from "react-router-dom";
import CenterWrapper from "../styled/CenterWrapper";
import H1 from "../styled/H1";
import P from "../styled/P";
import UnderHeader from "../styled/UnderHeader";
import Wrapper from "../styled/Wrapper";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSearchSubmit() {
    history.push(`/doctors${"/" + searchValue}`);
  }

  return (
    <UnderHeader>
      <CenterWrapper direction="column">
        <Wrapper max-width="700px">
          <H1> Prenez rendez vous en ligne chez un professionel de santé</H1>
          <P>C'est immediat, simple et gratuit.</P>
          <RowWrapper>
            <StyledInput value={searchValue} onChange={handleSearchChange} />
            <Button onClick={handleSearchSubmit}>Rechercher</Button>
          </RowWrapper>
        </Wrapper>
      </CenterWrapper>
    </UnderHeader>
  );
};

export default SearchBar;
