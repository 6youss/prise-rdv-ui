import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import colors from "./colors";
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20px;
`;
export const Dot = styled.div<{ delay: string }>`
  background-color: ${colors.primary};
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 2px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
class LoadingDots extends Component {
  render() {
    return (
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    );
  }
}
export default LoadingDots;
