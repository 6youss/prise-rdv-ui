import styled from "styled-components";
import colors from "./colors";

export const H1 = styled.h1<{light?:boolean}>`
  color: ${ props=> props.light? "white" : colors.primary };
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;