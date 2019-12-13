import React from "react";
import RowWrapper from "../styled/RowWrapper";
import StyledInput from "../styled/StyledInput";
import Button from "../styled/Button";
import { useHistory } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSearchSubmit(){
    history.push(`/doctors${"/"+searchValue}`);
  }


  return (
    <RowWrapper>
      <StyledInput value={searchValue} onChange={handleSearchChange} />
      <Button onClick={handleSearchSubmit} >
        Rechercher
      </Button>
    </RowWrapper>
  );
};

export default SearchBar;
