import styled from "styled-components";

const SectionWrapper = styled.div<{ background?: string }>`  
  background-color: ${props=>props.background};
  width: 100%;
  padding: 30px 5%;
`;

export default SectionWrapper;
