import styled from "styled-components";

export const NavBarWrapper = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 50px;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
`;
