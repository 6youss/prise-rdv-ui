import styled from "styled-components";

const CenterWrapper = styled.div<{ fullScreen?: boolean, direction?:string }>`
  display: flex;
  flex-direction: ${props=>props.direction};
  justify-content: center;
  align-items: center;
  height: ${props => (props.fullScreen ? "100vh" : "auto")};
`;

export default CenterWrapper;
