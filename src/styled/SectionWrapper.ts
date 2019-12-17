import styled from "styled-components";

export const SectionWrapper = styled.div<{ background?: string }>`  
  background-color: ${props=>props.background};  
  padding: 30px 5%;
`;
