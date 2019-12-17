import styled from "styled-components";

export const RowWrapper = styled.div<{ align?: string; justify?: string }>`
  display: flex;
  width: 100%;
  justify-content: ${props => props.justify};
  align-items: ${props => (props.align ? props.align : "center")};
`;