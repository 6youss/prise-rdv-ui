import React from "react";
import DoctorsSearchBar from "../components/SearchBar";
import DoctorsList from "../components/DoctorsList";

const Doctors: React.FC = () => {
  return (
    <>
      <DoctorsSearchBar />
      <DoctorsList />
    </>
  );
};

export default Doctors;
