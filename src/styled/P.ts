import styled from "styled-components";
import colors from "./colors";

export const P = styled.p<{light?:boolean}>`
  color: ${ props=> props.light? "white" : colors.gray };
  font-size: 14px;  
  padding: 0;
  margin: 0;
`;