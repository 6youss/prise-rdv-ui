import styled from "styled-components";

const Wrapper = styled.div<{ width?: string; "max-width"?: string }>`
  width: ${props => props.width};
  max-width: ${props => props["max-width"]};
`;

export default Wrapper;
