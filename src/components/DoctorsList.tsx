import React from "react";
import colors from "../styled/colors";
import {DoctorsItem} from "./DoctorItem";
import { SectionWrapper } from "../styled";

interface IDoctor {
  firstName:string;
  lastName: string;
  holidays: Date[]
}

type DoctorsListProps = {
  doctors: IDoctor[]
};

export const DoctorsList: React.FC<DoctorsListProps> = ({ doctors }) => {  

  return (
    <SectionWrapper background={colors.lightGray}>
      {doctors.map((doctor: any, index: number) => {        
        return (
          <DoctorsItem
            key={"doctor-" + index}
            firstName={doctor.firstName}
            lastName={doctor.lastName}
          />
        );
      })}
    </SectionWrapper>
  );
};