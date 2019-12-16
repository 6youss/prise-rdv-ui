import styled from "styled-components";
import Wrapper from "./Wrapper";

const CenterWrapper = styled(Wrapper)<{ fullScreen?: boolean; direction?: string }>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  height: ${props => (props.fullScreen ? "100vh" : "auto")};
`;

export default CenterWrapper;
