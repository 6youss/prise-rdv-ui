import styled from "styled-components";
import colors from "./colors";

export const TextButton = styled.button<{ primary?: boolean }>`
  padding: 10px 1em;
  color: ${props => (props.primary ? "white" : colors.primary)};
  background:none;
  border:none;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    color: ${colors.primaryDark};
    border-bottom: solid 1px ${colors.primary};
  }
  :focus {
    outline: none;
    box-shadow: 0 0 6px 0 ${colors.primary};
  }
  &:disabled {
    outline: none;
  }
`;
