import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import colors from "./colors";
const StyledLink = styled(Link)<{ "data-active"?: boolean }>`
  color: ${colors.primary};
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  opacity: 1;
  transition: all 0.4s;
  ${props =>
    props["data-active"] &&
    css`
      background-color: #fff2;
      border: solid 1px ${colors.primary};
    `}

  &:hover {
    ${props =>
      props["data-active"] === false &&
      css`
        background-color: #fff2;
        border: solid 1px ${colors.primary};
        background-color: #fff2;
        border: solid 1px ${colors.primary};
      `}
  }
`;

export default StyledLink;
