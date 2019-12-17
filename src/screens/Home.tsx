import React from "react";
import { DoctorsSearchBar } from "../components";
import { useHistory } from "react-router";

const Home: React.FC = () => {

  const history = useHistory();
  function handleSearchSubmit(searchValue : string){
    history.push(`/doctors/${searchValue}`)
  }
  return <DoctorsSearchBar onSubmit={handleSearchSubmit} />
};

export default Home;
