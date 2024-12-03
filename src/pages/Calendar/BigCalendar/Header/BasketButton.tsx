import { BiCartAlt } from "react-icons/bi";
import styled from "styled-components";

export const BasketButton = () => (
  <StyledBasketButton>
    <BiCartAlt size={20} />
  </StyledBasketButton>
);

const StyledBasketButton = styled.button`
  padding: 10px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  transition: all 0.3s;
  path,
  circle {
    fill: #737373;
    transition: all 0.3s;
  }
  &:hover {
    background: #111;
    path,
    circle {
      fill: #ffffff;
    }
  }
`;
