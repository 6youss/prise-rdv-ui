import styled from "styled-components";
import colors from "./colors";

export const DoctorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  transition: all 300ms;
  &:hover{
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 10px 0 #0003;
  }
`;