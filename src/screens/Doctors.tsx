import React from "react";
import DoctorsSearchBar from "../components/DoctorsSearchBar";
import DoctorsList from "../components/DoctorsList";
import SectionWrapper from "../styled/SectionWrapper";
import { useParams } from "react-router";

const Doctors: React.FC = () => {
  const params = useParams<{ name: string }>();
  return (
    <>
      <DoctorsSearchBar />

      <DoctorsList searchValue={params.name} />
    </>
  );
};

export default Doctors;
