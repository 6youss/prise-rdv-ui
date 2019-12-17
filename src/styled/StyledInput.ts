import styled from "styled-components";
import colors from "./colors";

export const StyledInput = styled.input<{ error?: string }>`
  width: 100%;
  cursor: text;
  text-align: left;
  font-size: 14px;
  line-height: 1.5;
  color: rgb(89, 89, 89);
  background-color: rgb(255, 255, 255);
  background-image: none;
  margin: 10px 0;
  padding: 10px;
  border: solid 1px ${props => (props.error ? colors.error : colors.mediumGray)};
  border-radius: 4px;

  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  :focus {
    outline: 0;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;
