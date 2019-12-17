import React from "react";
import {
  UnderHeader,
  Wrapper,
  H1,
  P,
  RowWrapper,
  StyledInput,
  Button,
  CenterWrapper
} from "../styled";

interface ISearchBarProps {
  onSubmit: (searchValue: string) => void;
}

export const DoctorsSearchBar: React.FC<ISearchBarProps> = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(searchValue);
  }

  return (
    <UnderHeader>
      <CenterWrapper direction="column">
        <Wrapper max-width="700px">
          <H1> Prenez rendez vous en ligne chez un professionel de santé</H1>
          <P>C'est immediat, simple et gratuit.</P>
          <form onSubmit={handleSearchSubmit} >
            <RowWrapper>
              <StyledInput value={searchValue} onChange={handleSearchChange} />
              <Button type="submit">Rechercher</Button>
            </RowWrapper>
          </form>
        </Wrapper>
      </CenterWrapper>
    </UnderHeader>
  );
};
