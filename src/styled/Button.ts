import styled from "styled-components";
import colors from "./colors";
import { Dot } from "./LoadingDots";

const Button = styled.button<{ primary?: boolean }>`
  display: flex;
  margin: 10px 0;
  padding: 0.5em 1em;
  background-color: ${props => (props.primary ? colors.primary : "white")};
  color: ${props => (props.primary ? "white" : colors.primary)};
  font-size: 1em;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    color: ${props => (props.primary ? colors.primary : "white")};
    background: ${props => (props.primary ? "white" : colors.primary)};
    ${Dot} {
      background-color: white;
    }
  }
  :focus {
    outline: none;
    box-shadow: 0 0 6px 0 ${colors.primary};
  }
  &:disabled {
    outline: none;
  }
`;

export default Button;
