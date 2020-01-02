import React from "react";
import styled from "styled-components";
import colors from "./colors";
import { CenterWrapper } from "./CenterWrapper";

interface StyledInputProps {
  error?: string;
}

const Input: React.FC<StyledInputProps & React.HTMLProps<HTMLInputElement>> = ({
  error,
  ...props
}: StyledInputProps) => {
  return (
    <InputWrapper>
      <input {...props} />
      {error ? <ErrorToolTip>{error}</ErrorToolTip> : null}
    </InputWrapper>
  );
};

const ErrorToolTip = styled(CenterWrapper)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(110%, -50%);
  max-width: 300px;
  background-color: ${colors.error};
  color: white;
  font-size: 13px;
  padding: 7px;
  border-radius: 5px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: ${colors.error};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  flex: 1;
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
