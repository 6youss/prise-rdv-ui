import React from "react";
import { fetchDoctors } from "../api/doctorAPI";
import { toast } from "react-toastify";
import { useParams ,useHistory} from "react-router";
import { DoctorsSearchBar, DoctorsList } from "../components";
import isEqual from "lodash.isequal";

const Doctors: React.FC = () => {
  const params = useParams<{ doctorName: string }>();
  const history = useHistory();
  const { doctorName } = params;
  const [doctors, setDoctors] = React.useState([]);

  function handleSearchSubmit(doctorName: string) {
    history.push(`/doctors/${doctorName}`);
    getDoctors(doctorName);
  }

  const getDoctors = React.useCallback((doctorName: string) => {
    console.log("fetching docs");
    fetchDoctors(doctorName).then(
      ({ doctors: doctorsAPI }) => {
        if (!isEqual(doctorsAPI, doctors)) {
          setDoctors(doctorsAPI);
        }
      },
      rejected => {
        toast(rejected.message, {
          type: "error",
          hideProgressBar: true
        });
      }
    );
  },[doctors]);

  React.useEffect(() => {
    getDoctors(doctorName);
  }, [doctorName, getDoctors]);

  return (
    <>
      <DoctorsSearchBar onSubmit={handleSearchSubmit} />
      <DoctorsList doctors={doctors} />
    </>
  );
};

export default Doctors;
