import styled from "styled-components";

const RowWrapper = styled.div<{ align?: string; justify?: string }>`
  display: flex;
  width: 100%;
  justify-content: ${props => props.justify};
  align-items: ${props => (props.align ? props.align : "center")};
`;

export default RowWrapper;
