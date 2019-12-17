import React from "react";
import male_avatar from "../assets/avatar_default_male.jpg";
import { RowWrapper, P, Button, DoctorItemWrapper } from "../styled";

type DoctorItemProps = {
  firstName: string;
  lastName: string;
};

export const DoctorsItem: React.FC<DoctorItemProps> = ({ firstName, lastName }) => {
  return (
    <DoctorItemWrapper>
      <RowWrapper justify="space-around" >
        <img width="100px" src={male_avatar} alt="avatar" />
        <P>{`${firstName} ${lastName}`}</P>
        <Button>Prendre Rendez-Vous</Button>
      </RowWrapper>      
    </DoctorItemWrapper>
  );
};
