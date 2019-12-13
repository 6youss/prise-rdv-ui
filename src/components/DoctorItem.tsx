import React from "react";
import DoctorItemWrapper from "../styled/DoctorItemWrapper";
import P from "../styled/P";

type DoctorItemProps = {
    firstName: string;
    lastName: string;
}

const DoctorsItem: React.FC<DoctorItemProps> = ({firstName,lastName}) => {
  
  return(
    <DoctorItemWrapper>
        <P>{firstName}</P>
        <P>{lastName}</P>
    </DoctorItemWrapper>
  );
};

export default DoctorsItem;
