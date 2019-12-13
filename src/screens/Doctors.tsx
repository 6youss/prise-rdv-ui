import React from "react";
import DoctorsSearchBar from "../components/DoctorsSearchBar";
import DoctorsList from "../components/DoctorsList";
import SectionWrapper from "../styled/SectionWrapper";
import UnderHeader from "../styled/UnderHeader";
import { useParams } from "react-router";

const Doctors: React.FC = () => {
  const params = useParams<{ name: string }>();
  return (
    <UnderHeader>
      <SectionWrapper>
        <DoctorsSearchBar />
        <DoctorsList searchValue={params.name} />
      </SectionWrapper>
    </UnderHeader>
  );
};

export default Doctors;
