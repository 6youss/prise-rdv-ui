import React from "react";
import RowWrapper from "../styled/RowWrapper";
import StyledInput from "../styled/StyledInput";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <RowWrapper>
      <StyledInput value={searchValue} onChange={handleSearchChange} />
      <Button>
        <Link to="/doctors" >Rechercher</Link>
      </Button>
    </RowWrapper>
  );
};

export default SearchBar;
