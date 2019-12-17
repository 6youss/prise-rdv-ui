import styled from "styled-components";

export const NavBarWrapper = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 50px;
  position: fixed;
  top: 0;
  left: 0;
`;