import React from "react";
import { fetchDoctors } from "../api/doctorAPI";
import { toast } from "react-toastify";
import SectionWrapper from "../styled/SectionWrapper";
import colors from "../styled/colors";
import DoctorsItem from "./DoctorItem";

type DoctorsListProps = {
  searchValue: string;
};

const DoctorsList: React.FC<DoctorsListProps> = ({ searchValue }) => {
  const [loading, setLoading] = React.useState(false);
  const [doctors, setDoctors] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchDoctors(searchValue)
      .then(
        ({ doctors }) => {
          console.log(doctors);
          setDoctors(doctors);
        },
        rejected => {
          console.log(rejected);
          toast(rejected.message, {
            type: "error",
            hideProgressBar: true
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

  return (
    <SectionWrapper background={colors.lightGray}>
      {loading ? (
        <p>loading</p>
      ) : (
        doctors.map((doctor: any, index: number) => (
          <DoctorsItem key={"doctor-" + index} firstName={doctor.firstName} lastName={doctor.lastName} />
        ))
      )}
    </SectionWrapper>
  );
};

export default DoctorsList;
