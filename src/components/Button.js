import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) =>
    primary ? "#FF8C00" : "CD853F"}; //similar to props.abc
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => (padding ? "16px 40px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ size }) => (size ? "10px" : "20px")};
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;
